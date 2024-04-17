"use client";
import React, { FC, ReactNode, useState } from "react";
import Heading from "../ui/elements/Heading";
import AdminContainer from "./AdminContainer";
import AdminSidebar from "./AdminSidebar";
import { FaAngleLeft, FaShopware } from "react-icons/fa6";

interface Props {
    children: ReactNode;
};

const page: FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <AdminProtected> */}
            <Heading
                title="dasboard"
                description="dashborad"
                keywords="Programming,MERN,Redux,Machine Learning"
            />
            <div className="flex min-h-screen ">
                <div className={` ${!open ? "w-64" : "w-20"} h-screen dark:bg-dark-300 bg-light-300 relative  duration-300 p-5 pt-8 overflow-y-auto   `}>
                    {/* <FaAngleLeft className="text-black bg-light-500 text-2xl  rounded-full cursor-pointer absolute -right-3 top-9  p-1   "
                    // onClick={() => setOpen(!open)}
                    /> */}

                    <AdminSidebar open={open} />
                </div>
                <div className=" w-full h-screen dark:bg-dark-100 bg-light-100 overflow-x-auto">
                    <AdminContainer>
                        {children}
                    </AdminContainer>
                </div>
            </div>
            {/* </AdminProtected> */}
        </div>
    );
};

export default page;
