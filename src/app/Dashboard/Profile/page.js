'use client'

import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import "./page.css"

export default function Register() {
    const [clickEdit, setclickEdit] = useState(false);

    const initialValues = {
        fullName: "",
        email: "",
        phoneNo: "",
        address: "",
        companyName: "",
    }

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Name is required')
            .matches(/^[A-Za-z\s]+$/, 'Only alphabetic characters are allowed')
            .trim(),

        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),

        phoneNo: Yup.string()
            .required('Phone No is required')
            .test('phone-number', 'Phone number must be 11 digits', value => {
                if (!value) return false;
                return /^\d{11}$/.test(value);
            }),

        address: Yup.string()
            .required('Address is required')
            .min(5, 'Address must be at least 5 characters long')
            .max(200, 'Address cannot exceed 200 characters')
            .matches(/^[A-Za-z0-9\s.,#-]+$/, 'Address can contain letters, numbers, spaces, and ,.#- symbols'),

        companyName: Yup.string()
            .required('Company Name is required')
            .min(5, 'Company Name must be at least 5 characters long')
            .max(50, 'Company Name cannot exceed 50 characters')
            .matches(/^[A-Za-z0-9\s&.,-]+$/, 'Only letters, numbers, spaces, &, ., and - are allowed')
            .test('not-only-numbers', 'Company Name cannot be only numbers', value => {
                if (!value) return false;
                return /[A-Za-z]/.test(value); // Ensure it contains at least one letter
            }),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        toast.success("Form submitted successfully!");
        resetForm();
    };

    const handelEditBtn = () => {
        setclickEdit(true);
    }

    const handelSaveSetting = () => {
        setclickEdit(false);
    }

    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ values }) => (
                    <Form>

                        <div className='h-full'>
                            <div className='w-5/5 space-y-3 rounded-xl px-10 py-8 dashboardbg'>

                                {/* Profile Picture / User Id / Edit Button */}
                                <div className='grid grid-cols-12' >
                                    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-6 mb-4 sm:mb-4 md:mb-0'>
                                        <div className='flex items-center'>
                                            <div className='me-4 hidden md:block'>
                                                <img src="/2.jpg" alt="Image Not Found" className="h-16 w-16 rounded-full" />
                                            </div>

                                            <div className='font-semibold text-xl' >
                                                guest715364
                                            </div>
                                        </div>

                                    </div>

                                    <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-6' >
                                        <div className='sm:flex sm:justify-start md:flex md:justify-end md:items-center h-full' >
                                            {!clickEdit && <button type="button" className="px-8 py-2 rounded-lg font-semibold cursor-pointer dashBoardButtons" onClick={handelEditBtn}>EDIT</button>}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <div >
                                    <h1 className="text-xl font-medium">Personal Information</h1>
                                </div>

                                {/* Full / Name Email */}
                                <div className="grid grid-cols-12 gap-4">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">Full Name:</label>
                                        <Field type="text" name="fullName" placeholder="Full Name"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="fullName" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>

                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">Email:</label>
                                        <Field type="email" name="email" placeholder="Email"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>

                                </div>

                                {/* Phone No / Address */}
                                <div className="grid grid-cols-12 gap-4">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6' >
                                        <label className="block font-medium text-gray-700">Phone No:</label>
                                        <Field type="text" name="phoneNo" placeholder="Phone No"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="phoneNo" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>

                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6' >
                                        <label className="block font-medium text-gray-700">Address:</label>
                                        <Field type="text" name="address" placeholder="Address"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="address" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <div className="grid grid-cols-12 mb-5 gap-4">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">Company Name:</label>
                                        <Field type="text" name="companyName" placeholder="Company Name"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="companyName" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>
                                </div>

                                {/* Save Setting */}
                                <div className='flex justify-center' >
                                    {clickEdit && <button type="submit" className="px-4 py-2 rounded-lg font-semibold cursor-pointer dashBoardButtons" onClick={handelSaveSetting}>SAVE SETTING</button>}
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
