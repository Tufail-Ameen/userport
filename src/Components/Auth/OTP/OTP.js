'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import App from '../../../../my-react-router-app/app/root';
import { useRouter } from "next/navigation";



export default function Log_in() {
    const initialValues = {
        otp: "",
    }

    const validationSchema = Yup.object({
        otp: Yup.string()
            .required("OTP is required")
            .matches(/^\d+$/, "OTP must contain only numbers") // Ensures only numbers (0-9)
            .test("len", "OTP must be exactly 6 digits", (val) => (val ? val.length === 6 : false)), // Ensures exactly 6 digits
    });

    const navigateTOPassword = useRouter()

    const onSubmit = (values) => {
        console.log(values);
        navigateTOPassword.push("/Password")
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
                            <div className='w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/5'>

                                <div className='mb-4'>
                                    <h1 className='text-3xl font-bold '>Enter security code</h1>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='number' className="block text-gray-700 text-sm font-medium mb-5">Please check your emails for a message with your code. Your code is 6 number long</label>

                                    <div className='grid grid-cols-12 gap-4' >
                                        <div className='col-span-12 sm:col-span-12 md:col-span-6'>
                                            <Field type="number" id='number' name='otp' placeholder="Enter code" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                            <ErrorMessage name="otp" component="div"
                                                className="text-red-500 font-bold" />
                                        </div>

                                        <div className='col-span-12 m:col-span-12 md:col-span-6'>
                                            <label htmlFor='number' className="block text-gray-700 text-sm font-medium">We sent your code to:</label>
                                            <label htmlFor='number' className="block text-gray-500 text-sm font-small">tufailameen62@gmail.com</label>
                                        </div>
                                    </div>

                                </div>

                                <div className='mb-4'>
                                    <button type="submit" className="w-full text-white py-2 rounded-lg text-lg font-medium transition cursor-pointer primary-bgcolor" >Continue</button>
                                </div>

                                <div className='mb-4' >
                                    <Link href="/Login" className="text-sm underline text-start hover:underline secondary-textcolor">Login with Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>)}
            </Formik>



        </>
    )
}