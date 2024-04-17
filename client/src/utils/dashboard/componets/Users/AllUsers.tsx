"use client"
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } from "@/redux/user/userApi";
import Button from "../ui/button/Button";
import TableRow from "./TableRow";
import EditModal from "../ui/elements/EditModal";
import ConformModal from "../ui/elements/ConformModel";

type Props = {
  isTeam?: boolean;
};
interface RowData {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
}
const AllUsers: FC<Props> = ({ isTeam }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState("");
  const [rowData, setRowData] = useState<RowData | null>(null);
  const { data } = useGetAllUsersQuery({});
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleSubmit = async (email: string, role: string) => {
    await updateUserRole({ email, role });
    setIsOpen(false)
  };

  const handleDelete = async () => {
    const id = userId;
    await deleteUser(id);
    setShow(false)
  };

  return (
    <div className="bg-#f3f4f6 border border-gray-300 p-4 rounded-sm relative">
      <EditModal isOpen={isOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit} data={rowData} />
      <ConformModal isOpen={show} setIsOpen={setShow} handleDelete={handleDelete} />
      <div className=" float-end mb-4">
        <Button
          type="button"
          size="md"
          rounded="sm"
          bg="solid"
          onClick={() => setIsOpen(true)}
        >
          Add User
        </Button>
      </div>
      <table className="min-w-full table-fixed divide-y divide-gay-400 rounded-sm ">
        <thead className="bg-white">
          <tr>
            <th scope="col" className="relative px-7 sm:w-12 sm:px-6">

            </th>
            <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-black">
              Name
            </th>

            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
              Email
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
              Role
            </th>

            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3 ">
              {/* <span className="sr-only">Edit</span> */}
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y ">

          {
            data?.users.map((row: any) => (
              <TableRow key={row._id} data={row} setUserId={setUserId} setShow={setShow} setRowData={setRowData} setIsOpen={setIsOpen} />
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default AllUsers