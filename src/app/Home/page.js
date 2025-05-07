'use client';

import Navbar from '@/Components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRef } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dispatch = useDispatch();
    const openDashBoard = useRouter();

    // Scroll Navbar Functionality
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 5) {
                // scrolling down
                setShowNavbar(true);
            } else {
                // scrolling up
                setShowNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollRef = useRef(null);
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    // Open Menu Functionality
    const openMenu = () => {
        console.log("open menu");
        openDashBoard.push("/Menu");
    }


    return (
        <>
            {/* Navbar Scroll */}
            {showNavbar && (
                <div className="fixed top-0 w-full z-50 transition-all duration-300">
                    <Navbar />
                </div>
            )}

            {/* Landing Page */}
            <div className='mb-20 h-screen w-full bg-[url("/Landing_Page_4.jpg")] bg-cover bg-center flex items-center px-5 sm:pl-5 sm:pr-5 md:pl-2 md:pr-2 lg:pl-10 lg:pr-10'>
                <div>
                    <h1 className="text-3xl text-white font-bold sm:text-3xl md:text-6xl">Order delivery near you</h1>
                    <div className="grid grid-cols-12 mt-5 gap-2">
                        {/* Input Field */}
                        <div className="col-span-12 bg-white flex items-center px-3 sm:col-span-12 md:col-span-4">
                            <IoLocationSharp className="text-2xl" />
                            <input
                                type="text"
                                placeholder="Enter delivery address"
                                className="p-2 w-full outline-none"
                            />
                        </div>

                        {/* Select Field */}
                        <div className="col-span-12 relative sm:col-span-12 md:col-span-4 ">
                            <select className="w-full p-3 pr-10 bg-white cursor-pointer appearance-none border rounded border-none">
                                <option className="cursor-pointer" value="1">🕒 Deliver now</option>
                                <option value="2">⏰ Schedule for later</option>
                            </select>
                            <MdOutlineKeyboardArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600" />
                        </div>

                        {/* Search Button */}
                        <div className='col-span-12 sm:col-span-12 md:col-span-4'>
                            <button className='w-full px-1 py-3 rounded-lg bg-black text-white cursor font-semibold' onClick={openMenu} >Search here</button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}