'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import App from '../../../../my-react-router-app/app/root';
import { useRouter } from "next/navigation";



export default function Log_in() {
    const initialValues = {
        email: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format')
            .matches(/^\S*$/, 'No spaces allowed')
            .matches(/^[^@.][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
            .matches(/^(?!.*\.\.)/, 'Consecutive dots are not allowed')
            .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Only Gmail addresses are allowed'),
    })

    let routerOTP = useRouter();

    const onSubmit = (values) => {
        console.log(values);
        routerOTP.push("/OTP");

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
                        <div className='col-span-6 h-screen'>
                            <div className="bg-[url('/3787203.jpg')] bg-cover bg-center h-full min-h-screen w-full" ></div>
                        </div>

                        <div className='col-span-6 flex justify-center items-center'>
                            {/* Forget form */}
                            <div className='w-3/5'>

                                <div className='mb-4'>
                                    <h1 className='text-3xl font-bold '>Reset your password</h1>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='email' className="block text-gray-700 text-sm font-medium mb-5">Enter your user account's verified email address and we will send you a password reset link.</label>
                                    <Field type="email" id='email' name='email' placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                    <ErrorMessage name="email" component="div"
                                        className="text-red-500 font-bold" />
                                </div>

                                <div className='mb-4'>
                                    <button type="submit" className="w-full text-white py-2 rounded-lg text-lg font-medium transition cursor-pointer primary-bgcolor" >Send password reset email</button>
                                </div>

                                <div className='mb-4 flex justify-between' >
                                    <Link href="/Login" className="text-sm text-start underline hover:underline secondary-textcolor">Already have an account?</Link>
                                    <Link href="/Register" className="text-sm text-end underline hover:underline secondary-textcolor">Register yourself</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </Form>)}
            </Formik>



        </>
    )
}