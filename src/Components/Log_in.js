'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';

export default function Log_in() {
    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string()
        .required('Email is required')
        .email('Invalid email format')
        .matches(/^\S*$/, 'No spaces allowed')
        .matches(/^[^@.][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
        .matches(/^(?!.*\.\.)/, 'Consecutive dots are not allowed')
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Only Gmail addresses are allowed'),

            password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Must include at least one uppercase letter')
            .matches(/[a-z]/, 'Must include at least one lowercase letter')
            .matches(/[0-9]/, 'Must include at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must include at least one special character')
            .matches(/^\S*$/, 'No spaces allowed'),
    })

    const onSubmit = () => {
        console.log("clicked");
    }


    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >

                {({ values, onsubmit }) => (<Form>
                    <div className='grid grid-rows-2 h-screen' >
                        {/* upper portion */}
                        <div className='h-full bg-[#14a8a4] grid grid-cols-2 grid-flow-col'>
                            <div className="flex flex-col justify-center items-center ">
                                <h1 className="text-white text-4xl font-bold leading-tight">
                                    Welcome to
                                </h1>
                                <h2 className="text-white text-2xl">
                                    userport
                                </h2>
                            </div>
                        </div>
                        {/* lower portion */}
                        <div className='h-full relative bottom-60'>
                            <div className='grid grid-cols-2'>
                                <div className=''></div>
                                <div className=''>
                                    <div className='grid grid-cols-5 grid-flow-col relative' >
                                        {/* <div className=''></div> */}
                                        {/* form */}
                                        <div className=' col-span-3 p-12 rounded-xl bg-[#f0f0f0] relative'>
                                            <div className='pb-8'>
                                                <h4 className='pb-2'>Welcome back!</h4>
                                                <h1 className='text-3xl font-bold '>Sign in</h1>
                                            </div>
                                            {/* <form> */}
                                            <div className="mb-4">
                                                <label htmlFor='email' className="block text-gray-700 text-sm font-medium mb-2">Enter your email address</label>
                                                <Field type="email" id='email' name='email' placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                                <ErrorMessage name="email" component="div"
                                                    className="text-red-500 fw-bold" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor='password' className="block text-gray-700 text-sm font-medium mb-2">Enter your Password</label>
                                                <div className="relative">
                                                    <Field type="password" id='password' name='password' placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                                    <ErrorMessage name="password" component="div"
                                                        className="text-red-500 fw-bold" />
                                                    <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                                                        {/* 👁️ <!-- Replace with an eye icon if using an icon library --> */}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center mb-6">
                                                <a href="#" className="text-sm text-gray-700 hover:underline hover:text-teal-700">Forgot Password</a>
                                            </div>

                                            <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-teal-700 transition cursor-pointer">Sign in</button>

                                            <div className="flex justify-between items-center my-4">
                                                <Link href="/Register" className="text-sm text-gray-700 hover:underline hover:text-teal-700">Register yourself</Link>
                                            </div>
                                            {/* </form> */}
                                        </div>
                                        {/* <div className=''></div> */}
                                        {/* <div className=''></div> */}
                                        {/* <div className=''></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>)}
            </Formik>



        </>
    )
}





