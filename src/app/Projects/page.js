import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center primary-bgcolor text-white">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Our Projects</h1>
                <p className="text-lg max-w-2xl text-center opacity-90 secondary-textcolor">
                    Explore our latest projects and see how we are making an impact through innovation and creativity.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-primary-color font-semibold text-lg rounded-full shadow-lg primary-bgcolor hover:primary-bgcolor transition">
                    View More
                </button>
            </div>
        </>
    );
}