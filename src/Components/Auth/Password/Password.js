'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import App from '../../../../my-react-router-app/app/root';
import { useRouter } from "next/navigation";



export default function Log_in() {
  const initialValues = {
    password: "",
    confirmPassword: "",
  }

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must include at least one uppercase letter')
      .matches(/[a-z]/, 'Must include at least one lowercase letter')
      .matches(/[0-9]/, 'Must include at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must include at least one special character')
      .matches(/^\S*$/, 'No spaces allowed'),

    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must include at least one uppercase letter')
      .matches(/[a-z]/, 'Must include at least one lowercase letter')
      .matches(/[0-9]/, 'Must include at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must include at least one special character')
      .matches(/^\S*$/, 'No spaces allowed')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const navigateToHome = useRouter()
  const onSubmit = (values) => {
    console.log(values);
    navigateToHome.push("/Dashboard")
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
                  <h1 className='text-3xl font-bold '>Choose a new password</h1>
                </div>

                <label className="block text-gray-700 bg-gray-100 text-sm font-medium mb-5">You can change your password immediately because you are logged into your email account on this browser.</label>

                <div className='mb-4'>
                  <label htmlFor='password' className="block text-gray-700 text-sm font-medium mb-5">Create a new password that is at least 6 characters long. A Strong password has a combination of letters, digits and punctuation marks.</label>
                  <Field type="password" id='password' name='password' placeholder="New password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  <ErrorMessage name="password" component="div"
                    className="text-red-500 font-bold" />
                </div>

                <div className='mb-4' >
                  <Field type="password" id='confirmPassword' name='confirmPassword' placeholder="Confirm password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  <ErrorMessage name="confirmPassword" component="div"
                    className="text-red-500 font-bold" />
                </div>

                <div className='mb-4'>
                  <button type="submit" className="w-full text-white py-2 rounded-lg text-lg font-medium transition cursor-pointer primary-bgcolor" >Change password</button>
                </div>

              </div>
            </div>
          </div>
        </Form>)}
      </Formik>



    </>
  )
}