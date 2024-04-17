import React, { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { BellIcon, ChevronDownIcon, Search } from 'lucide-react'
import Link from 'next/link'
import { useLogOutQuery } from '@/redux/auth/authApi'
import Image from 'next/image'
import avatarIcon from "@/../public/assests/avatar.png";
import { useSelector } from 'react-redux'

const Header = () => {
  const [logout, setLogout] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useSelector((state: any) => state.auth);
  const { } = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  return (

    <div className='p-4 sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-100 bg-dark-100  px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      <form className="flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-black"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 bg-transparent py-2 pl-8 pr-0 text-black focus:ring-0 ring-0 sm:text-sm focus:border-none "
            placeholder="Search..."
            type="search"
            name="search"
          />

        </div>
      </form>


      {/* Profile dropdown */}
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <Image
            src={user.avatar && user?.avatar?.url || avatarIcon}
            alt=""
            width={30}
            height={30}
            className=" h-8 w-8 cursor-pointer rounded-full "
          />
          <span className="hidden lg:flex lg:items-center">
            <span className="ml-4 text-sm font-semibold leading-6 text-black " aria-hidden="true">
              {user?.name}
            </span>
            <ChevronDownIcon className="ml-2 h-5 w-5 text-black " aria-hidden="true" />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-dark-300 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            <Menu.Item >
              <Link href="#" className='block p-2 hover:bg-dark-400 ' >
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item >
              <li className='block p-2 hover:bg-dark-400 cursor-pointer ' onClick={() => setLogout(true)} >
                logout
              </li>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>


  )
}

export default Header
