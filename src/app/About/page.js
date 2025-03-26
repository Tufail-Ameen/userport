import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center primary-bgcolor text-white">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
                <p className="text-lg max-w-2xl text-center opacity-90 secondary-textcolor">
                    Learn more about our journey, mission, and values. We are dedicated to providing the best services to our users.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-primary-color font-semibold text-lg rounded-full shadow-lg primary-bgcolor hover:primary-bgcolor transition">
                    Contact Us
                </button>
            </div>
        </>
    );
}
