'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import "./FancyRegister.css"

export default function Register() {
    const initialValues = {
        firstName: "",
        lastName: "",
        gender: "Male",
        language: [],
        email: "",
        phoneNo: "",
        city: "",
        password: "",
        description: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required')
            .matches(/^[A-Za-z]+$/, 'Only alphabetic characters are allowed'),

        lastName: Yup.string()
            .required('Last name is required')
            .matches(/^[A-Za-z]+$/, 'Only alphabetic characters are allowed'),

        language: Yup.array()
            .min(1, 'Select at least one option'),

        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),

        phoneNo: Yup.string()
            .required('Phone No is required')
            .test('phone-number', 'Phone number must be 11 digits', value => {
                if (!value) return false;
                return /^\d{11}$/.test(value);
            }),

        city: Yup.string()
            .required("Select at least one option"),

        password: Yup.string()
            .required("Password is required")
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        toast.success("Form submitted successfully!");
        resetForm();
    };

    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ values }) => (
                    <Form>
                        <div className='grid grid-flow-col grid-cols-12 min-h-screen' >

                            <div className='col-span-6'>
                                <div className="bg-[url('/3787203.jpg')] bg-cover bg-center h-full min-h-screen w-full" ></div>
                            </div>

                            <div className='col-span-6 flex justify-center items-center my-5'>
                                <div className='w-3/5 space-y-3'>

                                    {/* Title */}
                                    <div >
                                        <h1 className="text-2xl font-bold">Register</h1>
                                    </div>

                                    {/* Name Fields */}
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                            <label className="block font-medium text-gray-700">First Name:</label>
                                            <Field type="text" name="firstName" placeholder="Enter First Name"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                            <ErrorMessage name="firstName" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>

                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                            <label className="block font-medium text-gray-700">Last Name:</label>
                                            <Field type="text" name="lastName" placeholder="Enter Last Name"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                            <ErrorMessage name="lastName" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>
                                    </div>

                                    {/* Gender / Language Selection */}
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                                            <label className="block font-medium text-gray-700">Gender:</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <Field type="radio" name="gender" value="Male" className="w-4 h-4 peer hidden" />
                                                    <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center radio-btn peer-checked:bg-teal-700 border-teal-700">
                                                        {/* <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div> */}
                                                    </div>

                                                    <span className='text-gray-700' >Male</span>
                                                </label>
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <Field type="radio" name="gender" value="Female" className="w-4 h-4 peer hidden" />
                                                    <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center radio-btn peer-checked:bg-teal-700 border-teal-700">
                                                        {/* <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div> */}
                                                    </div>
                                                    <span className='text-gray-700'>Female</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6' >
                                            <label className="block font-medium text-gray-700">Select Language:</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <Field type="checkbox" name="language" value="English" className="w-4 h-4 custom-checkbox" />
                                                    <span className='text-gray-700' >English</span>
                                                </label>
                                                <label className="flex items-center space-x-2 cursor-pointer">
                                                    <Field type="checkbox" name="language" value="Spanish" className="w-4 h-4" />
                                                    <span className='text-gray-700'>Spanish</span>
                                                </label>
                                            </div>
                                            <ErrorMessage name="language" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>

                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                            <label className="block font-medium text-gray-700">Email:</label>
                                            <Field type="email" name="email" placeholder="Enter Email"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>

                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6' >
                                            <label className="block font-medium text-gray-700">Phone No:</label>
                                            <Field type="text" name="phoneNo" placeholder="Enter Phone No"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                            <ErrorMessage name="phoneNo" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>
                                    </div>

                                    {/* City / password Selection */}
                                    <div className='grid grid-cols-12 gap-4' >
                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6' >
                                            <label className="block font-medium text-gray-700">Select City:</label>
                                            <Field as="select" name="city" placeholder="Select City"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            >
                                                <option className='text-gray-700' value=""></option>
                                                <option value="Karachi" className='text-gray-700'>Karachi</option>
                                                <option value="Islamabad" className='text-gray-700'>Islamabad</option>
                                                <option value="Peshawar" className='text-gray-700'>Peshawar</option>
                                                <option value="Faisalabad" className='text-gray-700'>Faisalabad</option>
                                                <option value="Lahore" className='text-gray-700'>Lahore</option>
                                            </Field>
                                            <ErrorMessage name="city" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>

                                        <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                            <label className="block font-medium text-gray-700">Password:</label>
                                            <Field type="password" name="password"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            />
                                            <ErrorMessage name="password" component="div" className="text-red-500 font-bold text-sm" />
                                        </div>
                                    </div>

                                    {/* Description*/}
                                    <div className='grid grid-cols-12'>
                                        <div className='col-span-12' >
                                            <label className="block font-medium text-gray-700">Description:</label>
                                            <Field as="textarea" name="description" placeholder="Describe yourself here"
                                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                rows="3"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button & Link */}
                                    <button type="submit" className="w-full text-white px-4 py-2 rounded-lg cursor-pointer primary-bgcolor">Submit</button>
                                    <Link href="/Login" className="text-sm underline secondary-textcolor">Already have an account?</Link>
                                </div>
                            </div>

                        </div>

                    </Form>
                )}
            </Formik>
            <ToastContainer position="top-center" autoClose={500} />
        </>
    )
}
