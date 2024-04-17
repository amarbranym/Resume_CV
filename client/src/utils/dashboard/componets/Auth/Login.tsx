"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../styles/style";
import { useForgetPasswordMutation, useLoginMutation } from "../../../../redux/auth/authApi";
import { toast } from "react-hot-toast";
import Button from "../ui/button/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
type Props = {
  setRoute: (route: string) => void;
  resetToken?:string
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login: FC<Props> = ({ setRoute }) => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [login, { isSuccess, error, isLoading }] = useLoginMutation();
  const [forgetPassword] = useForgetPasswordMutation()
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!");
      router.push("/dashboard");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleForgetPassword = async () => {
    if (!values.email) {
      toast.error("Please enter your email!");
      return;
    }
    const email = values.email
    await forgetPassword({ email })
  };

  return (
    <div className="  m-auto p-8  ">
      <h1 className={`${styles.title}`}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className={`${styles.label}`} htmlFor="email">
          Enter your Email
        </label>
        <input
          type="email"
          name=""
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${errors.email && touched.email && "border-red-500"} ${styles.input
            }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="email">
            Enter your password
          </label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${errors.password && touched.password && "border-red-500"
              } ${styles.input}`}
          />
          <span className="text-light-500 float-right mt-2 font-medium cursor-pointer underline " onClick={handleForgetPassword}>forget password?</span>
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <Button type="submit" size="lg" rounded="md" bg="solid" loading={isLoading}>Login</Button>
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2"
            onClick={() => signIn("google")}
          />
          <AiFillGithub size={30} className="cursor-pointer text-black ml-2"
            onClick={() => signIn("github")}
          />
        </div>
        <h5 className="text-center text-black pt-4 font-Poppins text-[14px]">
          Not have any account?{" "}
          <Link
            href='#'
            className="text-light-500 pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign up
          </Link>
        </h5>
      </form>
      <br />
    </div>
  );
};


export default Login;
