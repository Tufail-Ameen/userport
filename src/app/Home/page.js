import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center primary-bgcolor text-white">
                <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Our Website</h2>
                <p className="text-lg max-w-2xl text-center opacity-90 secondary-textcolor">
                    Discover the best services and features designed just for you. We ensure high quality and the best experience for our users.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-primary-color font-semibold text-lg rounded-full shadow-lg primary-bgcolor hover:primary-bgcolor transition">
                    Get Started
                </button>
            </div>
        </>
    );
}
