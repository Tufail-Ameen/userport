import InnerNavBar from '@/Components/Inner Navbar/InnerNavBar';
import Innersidebar from '@/Components/InnerSidebar/InnerSideBar';
import React from 'react'

export default function layout({ children }) {
    return (
        <div className="grid grid-rows-12 grid-cols-12 h-screen">
            {/* Sidebar */}
            <div className="h-screen hidden     sm:hidden    md:block lg:block md:row-span-12 md:col-span-4    lg:row-span-12 lg:col-span-2  border-[#f4f4f4]">
                <Innersidebar></Innersidebar>
            </div>

            {/* Navbar */}
            <div className="row-span-1 col-span-12    sm:row-span-1 sm:col-span-12 md:row-span-1     md:col-span-8 lg:row-span-1    lg:col-span-10 border-[#f4f4f4]">
                <InnerNavBar></InnerNavBar>
            </div>

            {/* Main Content */}
            <div className="flex justify-center items-center   row-span-11 col-span-12 sm:row-span-11 sm:col-span-12    md:row-span-11 md:col-span-8    lg:row-span-11 lg:col-span-10 p-30 sm:p-30 md:p-4 border-[#f4f4f4]">
                {children}
            </div>
        </div>
    );
}
