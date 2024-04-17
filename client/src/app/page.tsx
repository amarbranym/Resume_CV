"use client"
import LoginProtected from '@/hooks/loginProtected';
import Login from '@/utils/dashboard/componets/Auth/Login';
import Signup from '@/utils/dashboard/componets/Auth/SignUp';
import Verification from '@/utils/dashboard/componets/Auth/Verification';
import CustomModal from '@/utils/dashboard/componets/ui/elements/CustomModel';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(true)

  return (
    <LoginProtected>
      <div className=''>
        {route === "Login" && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                component={Login}
              />
            )}
          </>
        )}

        {route === "Sign-Up" && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                component={Signup}
              />
            )}
          </>
        )}

        {route === "Verification" && (
          <>
            {open && (
              <CustomModal
                open={open}
                setOpen={setOpen}
                setRoute={setRoute}
                component={Verification}
              />
            )}
          </>
        )}
      </div>
    </LoginProtected>
  )
}
