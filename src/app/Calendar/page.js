import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center primary-bgcolor text-white">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Calendar</h1>
                <p className="text-lg max-w-2xl text-center opacity-90 secondary-textcolor">
                    Stay organized with our calendar. Plan your schedule and never miss an important date.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-primary-color font-semibold text-lg rounded-full shadow-lg primary-bgcolor hover:primary-bgcolor transition">
                    View Calendar
                </button>
            </div>
        </>
    );
}