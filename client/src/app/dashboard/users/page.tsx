import React, { FC, ReactNode } from "react";
import Layout from "../../../utils/dashboard/componets/Layout";
import Protected from "@/hooks/useProtected";
import Loader from "@/utils/dashboard/componets/ui/elements/Loader";
import ProfileInfo from "@/utils/dashboard/componets/Profile/ProfileInfo";
import AllCourses from "@/utils/dashboard/componets/Users/AllUsers";
interface PageProps {
    children: ReactNode
}

const page: FC<PageProps> = ({ children }) => {
    return (
        <Loader>
            <Protected>
                <Layout>
                  <AllCourses/>
                </Layout>
            </Protected>
        </Loader>
    )
}

export default page;
