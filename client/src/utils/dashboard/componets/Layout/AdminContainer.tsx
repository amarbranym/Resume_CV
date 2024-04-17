import React, { FC, ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}
const AdminContainer: FC<Props> = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <div className='p-4 text-black bg-[#f0eeeb] h-auto'>
        {children}
      </div>
    </div>
  )
}

export default AdminContainer
