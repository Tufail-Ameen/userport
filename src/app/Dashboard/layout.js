import InnerNavBar from '@/Components/Inner Navbar/InnerNavBar';
import Innersidebar from '@/Components/InnerSidebar/InnerSideBar';
import React from 'react'

export default function layout({ children }) {
    return (
        <div className="grid grid-rows-12 grid-cols-12 h-screen">
            {/* Sidebar */}
            <div className=" hidden sm:hidden md:block lg:block md:row-span-12 md:col-span-3 lg:row-span-12 lg:col-span-2">
                <Innersidebar></Innersidebar>
            </div>

            {/* Navbar */}
            <div className=" row-span-1 col-span-12 sm:row-span-1 sm:col-span-12 md:row-span-1 md:col-span-9 lg:row-span-1 lg:col-span-10">
                <InnerNavBar></InnerNavBar>
            </div>

            {/* Main Content */}
            <div className=" row-span-11 col-span-12 sm:row-span-11 sm:col-span-12 md:row-span-11 md:col-span-9 lg:row-span-11 lg:col-span-10 p-4">
                {children}
            </div>
        </div>
    );
}
