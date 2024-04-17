import React, { FC, ReactNode } from "react";
import Protected from "@/hooks/useProtected";
import Loader from "@/utils/dashboard/componets/ui/elements/Loader";
import ProfileInfo from "@/utils/dashboard/componets/Profile/ProfileInfo";
import Layout from "@/utils/dashboard/componets/Layout"
interface PageProps {
    children: ReactNode
}

const page: FC<PageProps> = ({ children }) => {
    return (
        <Loader>
            <Protected>
                <Layout>
                   <ProfileInfo/>
                </Layout>
            </Protected>
        </Loader>
    )
}

export default page;
