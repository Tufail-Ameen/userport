"use client"

import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaCartArrowDown } from "react-icons/fa";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/Redux/Slice/toggleCartSlice';


export default function Navbar() {
  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Disclosure as="nav" className="bg-[#ffffff]">
        <div className="w-full px-5">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            {/* Starting of the Navbar */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start cursor-pointer">
            </div>

            {/* Ending of the Navbar */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative cursor-pointer mr-4" onClick={() => dispatch(toggleCart())}>
                <FaCartArrowDown className="size-6 text-gray-600 hover:text-gray-900 transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full size-4 flex items-center justify-center">{totalItems}</span>
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="cursor-pointer relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src='2.jpg'
                      className="size-10 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link href="/Login" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Login / Sign Up</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Your Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Settings</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Sign out</Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link href="/" className="block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium">Home</Link>
            <Link href="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">About</Link>
            <Link href="/projects" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Projects</Link>
            <Link href="/calendar" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Calendar</Link>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  )
}
