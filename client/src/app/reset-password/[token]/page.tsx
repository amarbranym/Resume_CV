"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomModal from '@/utils/dashboard/componets/ui/elements/CustomModel';
import ResetPassword from '@/utils/dashboard/componets/Auth/RsetPassword';
import LoginProtected from '@/hooks/loginProtected';

const Page = () => {
    const [open, setOpen] = useState(true);
    const { token } = useParams();
   

    console.log("token", token)

    return (
        <LoginProtected>
            <CustomModal
                open={open}
                setOpen={setOpen}
                component={ResetPassword}
                resetToken={token as string}
            />
        </LoginProtected>
    );
};

export default Page;
