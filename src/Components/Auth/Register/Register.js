'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import "./Register.css";

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
            <div className='grid grid-rows-2 h-screen'>
                {/* upper portion */}
                <div className='h-full grid grid-cols-2 grid-flow-col topbar'></div>

                {/* lower portion */}
                <div className='h-full relative bottom-60 '>
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-12'>
                            <Formik
                                validationSchema={validationSchema}
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                {({ values }) => (
                                    <Form className=" bg-[#f0f0f0] rounded-xl grid grid-cols-7 h-full py-20">
                                        <div className='col-span-2'></div>
                                        <div className='col-span-3'>
                                            <div className='space-y-5'>
                                                {/* Title */}
                                                <div className='grid grid-cols-12' >
                                                    <h2 className="text-2xl font-bold">Register</h2>
                                                </div>

                                                {/* Name Fields */}
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6'>
                                                        <label className="block font-medium text-gray-700">First Name:</label>
                                                        <Field type="text" name="firstName" placeholder="Enter First Name"
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                                    </div>

                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6'>
                                                        <label className="block font-medium text-gray-700">Last Name:</label>
                                                        <Field type="text" name="lastName" placeholder="Enter Last Name"
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                                    </div>
                                                </div>

                                                {/* Gender / Language Selection */}
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
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

                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6' >
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
                                                        <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
                                                    </div>

                                                </div>

                                                {/* Email & Phone */}
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6'>
                                                        <label className="block font-medium text-gray-700">Email:</label>
                                                        <Field type="email" name="email" placeholder="Enter Email"
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                                    </div>

                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6' >
                                                        <label className="block font-medium text-gray-700">Phone No:</label>
                                                        <Field type="text" name="phoneNo" placeholder="Enter Phone No"
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <ErrorMessage name="phoneNo" component="div" className="text-red-500 text-sm" />
                                                    </div>
                                                </div>

                                                {/* City / password Selection */}
                                                <div className='grid grid-cols-12 gap-4' >
                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6' >
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
                                                        <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                                    </div>

                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6'>
                                                        <label className="block font-medium text-gray-700">Password:</label>
                                                        <Field type="password" name="password"
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        />
                                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
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
                                                <div className='grid grid-cols-12 gap-4' >
                                                    <div className='col-span-12 sm:col-span-12 md:col-span-6' >
                                                        <Link href="/Login" className="secondary-textcolor">Already have an account?</Link>
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
                                                        <button type="submit" className="text-white px-4 py-2 rounded-lg cursor-pointer primary-bgcolor">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <ToastContainer position="top-center" autoClose={500} />
                        </div>
                        <div className='col-span-1' ></div>
                    </div>
                </div>
            </div>

        </>
    )
}
