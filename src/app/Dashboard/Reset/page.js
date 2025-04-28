'use client'

import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

export default function Register() {

    const initialValues = {
        cPassword: "",
        nPassword: "",
        cnPassword: "",
    }

    const validationSchema = Yup.object({
        cPassword: Yup.string()
            .required("Current Password is required")
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password cannot exceed 20 characters"),

        nPassword: Yup.string()
            .required("New Password is required")
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password cannot exceed 20 characters")
            .matches(/[A-Z]/, "Password must have at least one uppercase letter")
            .matches(/[a-z]/, "Password must have at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[@$!%*?&]/, "Password must contain at least one special character (@, $, !, %, *, ?, &)")
            .notOneOf(
                [Yup.ref("cPassword")],
                "New Password must be different from Current Password"
            ),

        cnPassword: Yup.string()
            .required("Confirm New Password is required")
            .oneOf([Yup.ref("nPassword")], "Passwords must match"),
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

                        <div className='h-full'>
                            <div className='w-5/5 space-y-3 rounded-xl px-10 py-8 dashboardbg'>

                                {/* Title */}
                                <div >
                                    <h1 className="text-xl font-medium">Change Password</h1>
                                </div>

                                {/* Current password */}
                                <div className="grid grid-cols-12">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">Current Password:</label>
                                        <Field type="password" name="cPassword" placeholder="Current Password"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="cPassword" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>
                                </div>

                                {/* New Passord / Confirm New Password */}
                                <div className="grid grid-cols-12 gap-4">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">New Password:</label>
                                        <Field type="password" name="nPassword" placeholder="New Password"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="nPassword" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>

                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700">Confirm New Password:</label>
                                        <Field type="password" name="cnPassword" placeholder="Confirm New Password:"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="cnPassword" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>
                                </div>

                                {/* Reset Password */}
                                <div className='flex justify-center' >
                                    <button type="submit" className="px-4 py-2 rounded-lg font-semibold cursor-pointer dashBoardButtons">REST PASSWORD</button>
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
