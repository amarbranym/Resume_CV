"use client"
import React, { FC, useEffect, useState } from "react";
import { useUpdatePasswordMutation } from "@/redux/user/userApi";
import { styles } from "../styles/style";
import { toast } from "react-hot-toast";
import Button from "../ui/button/Button";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      await updatePassword({ oldPassword, newPassword });
      setOldPassword("")
      setNewPassword("")
      setConfirmPassword("")
    }
  };


  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black  pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          // aria-required  
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className=" w-[100%] 800px:w-[60%] mt-5">
            <label className="block pb-2 text-black   ">
              Enter your old password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black `}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className=" w-[100%] 800px:w-[60%] mt-2">
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
          <div className=" w-[100%] 800px:w-[60%] mt-2">
            <label className="block pb-2 text-black ">
              Enter your confirm password
            </label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0 text-black `}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="mt-4">
              <Button size='lg' rounded="sm" bg="solid" loading={isLoading} >Update</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
