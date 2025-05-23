import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function InnerNavBar() { 
    return (
        <>
            <Disclosure as="nav" className="bg-[#f0f0f0]">
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

                        <div className="flex flex-1 items-last justify-start sm:items-stretch sm:justify-start cursor-pointer ">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium innerNavBarMenu">Home</Link>
                                    <Link href="/About" className="text-black-300 rounded-md px-3 py-2 text-sm font-medium innerNavBarMenu">About</Link>
                                    <Link href="/Projects" className="text-black-300 rounded-md px-3 py-2 text-sm font-medium innerNavBarMenu">Projects</Link>
                                    <Link href="/Calendar" className="text-black-300 rounded-md px-3 py-2 text-sm font-medium innerNavBarMenu">Calendar</Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full p-1 innerNavBarBellIcon cursor-pointer"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="cursor-pointer relative flex rounded-full">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src='2.jpg'
                                            className="size-10 rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link href="/Dashboard" className="block rounded-md px-3 py-2 text-base font-medium innerNavBarMenu">Dashboard</Link>
                        <Link href="/Dashboard/Profile" className="block rounded-md px-3 py-2 text-base font-medium innerNavBarMenu">Profile</Link>
                        <Link href="/Dashboard/Reset" className="block rounded-md px-3 py-2 text-base font-medium innerNavBarMenu">Reset Password</Link>
                        <Link href="/Dashboard/Delete_Account" className="block rounded-md px-3 py-2 text-base font-medium innerNavBarMenu">Delete Account</Link>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}
