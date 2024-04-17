"use client"
import { useRouter } from "next/navigation";
// Protected.tsx

import UserAuth from "./userAuth";
import React from "react";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const isAuthenticated = UserAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/");
    return null; 
  }

  return <>{children}</>;
};

export default Protected;
