"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "./userAuth";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';

interface ProtectedProps {
    children: React.ReactNode;
}

const LoginProtected: React.FC<ProtectedProps> = ({ children }) => {
    const router = useRouter();
    const isAuthenticated = useAuth(); 
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        }
    }, [isAuthenticated, router]);


    return <>{children}</>;
};

export default LoginProtected;
