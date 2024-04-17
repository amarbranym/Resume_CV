// TableRow.tsx
import React, { useState } from 'react';
import Button from '../ui/button/Button';
import EditModal from '../ui/elements/EditModal';
interface RowData {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
}
interface TableRowProps {
  data: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
  key: string;
  setShow: (show: boolean) => void;
  setUserId: (setUserId: string) => void
  setRowData: React.Dispatch<React.SetStateAction<RowData | null>>;
  setIsOpen: (isOpen: boolean) => void;


}

const TableRow: React.FC<TableRowProps> = ({ data, key, setUserId, setShow, setRowData, setIsOpen }) => {

  const handleSubmit = () => {
    setUserId(data._id)
    setShow(true)
  }

  const handleEdit = () => {
    setRowData(data)
    setIsOpen(true)

  }

  return (
    <>
      <tr key={key}>
        <td className="relative px-7 sm:w-12 sm:px-6">

        </td>
        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-black">{data.name}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{data.email}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{data.role}</td>
        <td className="whitespace-nowrap py-4  text-right text-sm font-medium pr-3  ">
          <div className='w-full flex gap-2 justify-end'>
            <div >

              <Button size="sm" rounded="sm" bg="solid" onClick={handleSubmit}>
                delete
              </Button>
            </div>
            <Button size="sm" rounded="sm" bg="solid" onClick={handleEdit}>
              Edit
            </Button>

          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
