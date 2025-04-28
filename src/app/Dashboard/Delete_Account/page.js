'use client'

import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export default function Register() {

    const initialValues = {
        delete: "",
    }

    const validationSchema = Yup.object({
        delete: Yup.string()
            .required("Write DELETE to delecte account")
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        // toast.success("Form submitted successfully!");
        resetForm();

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your account has been deleted.",
                    icon: "success"
                });
            }
        });
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
                                    <h1 className="text-xl font-medium">Deleting Account</h1>
                                </div>

                                <div>Deleting your account will remove all of your <br /> information from our database. This cannot be <br /> undone.</div>
                                <div>To Confirm this, Type "DELETE"</div>

                                {/* Delete Account */}
                                <div className="grid grid-cols-12">
                                    <div className='col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6'>
                                        <label className="block font-medium text-gray-700"></label>
                                        <Field type="text" name="delete" placeholder=""
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        />
                                        <ErrorMessage name="delete" component="div" className="text-red-500 font-bold text-sm" />
                                    </div>
                                </div>

                                {/* Delete Account button */}
                                <div className='flex justify-center' >
                                    <button type="submit" className="px-4 py-2 rounded-lg font-semibold cursor-pointer bg-red-500 text-white">DELETE ACCOUNT</button>
                                </div>

                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
            {/* <ToastContainer position="top-center" autoClose={500} /> */}
        </>
    )
}
