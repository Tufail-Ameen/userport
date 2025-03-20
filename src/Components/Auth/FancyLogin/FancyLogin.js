'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import App from '../../../../my-react-router-app/app/root';
import "./FancyLogin.css";



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

    const onSubmit = (values) => {
        console.log(values);
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
                    <div className='grid grid-flow-col grid-cols-12 h-full' >
                        <div className='col-span-6'>
                            <div className="bg-[url('/3787203.jpg')] bg-cover bg-center h-full min-h-screen w-full" ></div>
                        </div>
                        <div className='col-span-6'>
                            <div className='grid grid-flow-col grid-col-12' >
                                <div className='col-span-3' ></div>
                                <div className='col-span-6' >
                                    {/* Login form */}
                                    <div className='flex flex-col justify-center h-screen'>
                                        <div className='grid grid-cols-12' >
                                            <div className='col-span-1'></div>
                                            <div className='col-span-10 pb-8'>
                                                <h4 className='pb-2'>Welcome back!</h4>
                                                <h1 className='text-3xl font-bold '>Sign in</h1>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12' >
                                            <div className='col-span-1'></div>
                                            <div className="col-span-10 mb-4">
                                                <label htmlFor='email' className="block text-gray-700 text-sm font-medium mb-2">Enter your email address</label>
                                                <Field type="email" id='email' name='email' placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                                <ErrorMessage name="email" component="div"
                                                    className="text-red-500 fw-bold" />
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12 ' >
                                            <div className='col-span-1'></div>
                                            <div className="col-span-10 mb-4">
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
                                        </div>

                                        <div className='grid grid-cols-12' >
                                            <div className='col-span-1'></div>
                                            <div className="col-span-10 mb-6">
                                                <a href="#" className="text-sm hover:underline secondary-textcolor">Forgot Password</a>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12' >
                                            <div className='col-span-1'></div>
                                            <div className='col-span-10' >
                                                <button type="submit" className="w-full text-white py-2 rounded-lg text-lg font-medium transition cursor-pointer primary-bgcolor" >Sign in</button>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12' >
                                            <div className='col-span-1'></div>
                                            <div className='col-span-10 my-4' >
                                                <Link href="/Register" className="text-sm hover:underline secondary-textcolor">Register yourself</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3' ></div>
                            </div>

                        </div>
                    </div>
                </Form>)}
            </Formik>



        </>
    )
}





