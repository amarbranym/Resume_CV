"use client"
import { useLoadUserQuery } from "@/redux/api/apiSlice";
import { useSocialAuthMutation } from "@/redux/auth/authApi";
import { useSession } from "next-auth/react";
import { FC, memo, useEffect } from "react";

const Loader: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data } = useSession();
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {});


  // useEffect(() => {
  //   socketId.on("connection", () => {});
  // }, []);


  return <>{isLoading ? <div className="h-screen w-screen flex justify-center items-center bg-white">
    <div className="loader">

    </div>
  </div> : <div>{children} </div>}</>;
};

export default memo(Loader)