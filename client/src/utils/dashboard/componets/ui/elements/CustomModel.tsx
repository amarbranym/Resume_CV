import React, { FC } from 'react'
import { Modal, Box } from "@mui/material";

type Props = {
    open: boolean;
    setOpen?: (open: boolean) => void;
    component: any;
    setRoute?: (route: string) => void;
    resetToken?:string
}

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component, resetToken }) => {
    return (
        <Modal
            open={open}
            // onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] m-auto  bg-white  rounded-[8px] shadow p-4 outline-none"
            >
                <Component setOpen={setOpen} setRoute={setRoute} resetToken={resetToken}  />
            </Box>
        </Modal>
    )
}

export default CustomModal