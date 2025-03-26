'use client'

import React from 'react'
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import App from '../../../../my-react-router-app/app/root';
import "./FancyLogin.css";
import { useRouter } from 'next/navigation';


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

    const openDashBoard = useRouter();

    const onSubmit = (values) => {
        console.log(values);
        openDashBoard.push("/Dashboard")
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
                    <div className='grid grid-cols-12 h-screen'>
                        {/* Left Section with Background Image */}
                        <div className='col-span-6'>
                            <div className="bg-[url('/3787203.jpg')] bg-cover bg-center h-full"></div>
                        </div>

                        {/* Right Section with Centered Form */}
                        <div className='col-span-6 flex justify-center items-center'>
                            <div className='w-3/5'>
                                <h4 className='pb-2 text-start'>Welcome back!</h4>
                                <h1 className='text-3xl font-bold text-start mb-4'>Sign in</h1>

                                <div className='mb-4'>
                                    <label htmlFor='email' className="block text-gray-700 text-sm font-medium mb-2">Enter your email address</label>
                                    <Field type="email" id='email' name='email' placeholder="Email address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 font-bold" />
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='password' className="block text-gray-700 text-sm font-medium mb-2">Enter your Password</label>
                                    <div className="relative">
                                        <Field type="password" id='password' name='password' placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                        <ErrorMessage name="password" component="div" className="text-red-500 font-bold" />
                                    </div>
                                </div>

                                <div className="mb-6 text-start">
                                    <Link href="/Forget" className="text-sm underline hover:underline secondary-textcolor text-start">Forgot Password?</Link>
                                </div>

                                <button type="submit" className="w-full text-white py-2 rounded-lg text-lg font-medium transition cursor-pointer primary-bgcolor">Sign in</button>

                                <div className="my-4 flex justify-between">
                                    <Link href="/Register" className="text-sm underline hover:underline secondary-textcolor">Register yourself</Link>
                                    <div className='flex space-x-2'>

                                        <button className="cursor-pointer w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full border bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500">
                                            <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
                                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 54 41" fill="none">
                                                <path className=""
                                                    d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
                                                    fill="" />
                                                <path className=""
                                                    d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
                                                    fill="" />
                                                <path className=""
                                                    d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
                                                    fill="" />
                                                <path className=""
                                                    d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
                                                    fill="" />
                                                <path className=""
                                                    d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
                                                    fill="" />
                                            </svg>
                                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-gray-900 z-0 transition-all duration-500 group-hover:top-0"></div>
                                        </button>

                                        <button className="cursor-pointer w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full border bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                                            <svg className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                                                <path
                                                    d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                                                    fill="" />
                                            </svg>
                                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-gray-900 z-0 transition-all duration-500 group-hover:top-0"></div>
                                        </button>

                                        <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden border bg-white shadow-md shadow-gray-200 group transition-all duration-500">
                                            <svg className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 51 51" fill="none">
                                                <path
                                                    d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                                                    fill="" />
                                                <path
                                                    d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                                                    fill="" />
                                                <defs>
                                                    <radialGradient id="paint0_radial_7092_54404" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)">
                                                        <stop offset="0.09" stopColor="#FA8F21" />
                                                        <stop offset="0.78" stopColor="#D82D7E" />
                                                    </radialGradient>
                                                    <radialGradient id="paint1_radial_7092_54404" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)">
                                                        <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                                                        <stop offset="1" stopColor="#8C3AAA" />
                                                    </radialGradient>
                                                </defs>
                                            </svg>
                                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-gray-900 z-0 transition-all duration-500 group-hover:top-0"></div>
                                        </button>

                                        <button className="cursor-pointer w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full border bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                                            <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                                                <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                                                    fill="" />
                                            </svg>
                                            <div className="absolute top-full left-0 w-full h-full rounded-full bg-gray-900 z-0 transition-all duration-500 group-hover:top-0"></div>
                                        </button>

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