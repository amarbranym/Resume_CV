import React, { FC, ReactNode } from "react";
import Layout from "@/utils/dashboard/componets/Layout"
import Protected from "@/hooks/useProtected";
import Loader from "@/utils/dashboard/componets/ui/elements/Loader";
import ChangePassword from "@/utils/dashboard/componets/Profile/ChangePassword";
interface PageProps {
    children: ReactNode
}

const page: FC<PageProps> = ({ children }) => {
    return (
        <Loader>
            <Protected>
                <Layout>
                   <ChangePassword/>
                </Layout>
            </Protected>
        </Loader>
    )
}

export default page;
