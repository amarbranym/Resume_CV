"use client"
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { LiaSpinnerSolid } from "react-icons/lia";
import avatarIcon from "@/../public/assests/avatar.png";
import { toast } from "react-hot-toast";
import { styles } from "../styles/style";
import { useSelector } from "react-redux";
import Button from "../ui/button/Button";
import { useEditProfileMutation, useUpdateAvatarMutation } from "@/redux/user/userApi";

const ProfileInfo: FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [name, setName] = useState(user && user.name);
  const [updateAvatar, { isLoading }] = useUpdateAvatarMutation();
  const [editProfile,{isLoading:loading}] = useEditProfileMutation();

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = async () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        await updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "") {
      await editProfile({
        name: name,
      });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar && user?.avatar?.url || avatarIcon}

            alt=""
            width={120}
            height={120}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-dark-400 rounded-full "
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png,image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-gray-50 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              {
                isLoading ?
                  <LiaSpinnerSolid size={20} className="z-1 animate-spin" /> :
                  <AiOutlineCamera size={20} className="z-1" />
              }

            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2">Full Name</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className="block pb-2">Email Address</label>
              <input
                type="text"
                readOnly
                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                required
                value={user?.email}
              />
            </div>
            <div className="mt-4">
              <Button size="lg" rounded="sm" bg="solid" loading={loading}  >Update</Button>
            </div>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default ProfileInfo;
