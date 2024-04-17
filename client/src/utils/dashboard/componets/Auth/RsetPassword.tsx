"use client"
import React, { FC, useEffect, useState } from "react";
import { styles } from "../styles/style";
import { toast } from "react-hot-toast";
import Button from "../ui/button/Button";
import { useResetPasswordMutation } from "@/redux/auth/authApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  resetToken: string
};

const ResetPassword: FC<Props> = ({ resetToken }) => {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { isSuccess, isLoading }] = useResetPasswordMutation()
  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      await resetPassword({ resetToken, newPassword })
      console.log("Email", resetToken)
      setNewPassword("")
      setConfirmPassword("")
    }
  };

  useEffect(() => {
    if (isSuccess) {

      router.push("/");
    }
  }, [isSuccess])

  return (
    <div className="  w-full p-8">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black  pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          // aria-required  
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >

          <div className=" w-[100%]  mt-2">
            <label className="block pb-2 text-black ">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black `}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%]  mt-2">
            <label className="block pb-2 text-black ">
              Enter your confirm password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4  text-black `}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className=" w-[100%] mt-4 flex justify-between items-center">
              <Button size='lg' rounded="sm" bg="solid" loading={isLoading}  >Reset Password</Button>

              <Link href='/' className="text-light-400 underline font-medium"> Go to Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
