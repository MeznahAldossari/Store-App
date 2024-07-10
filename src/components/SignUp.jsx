import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import Logo from '../assets/foodly-logo.png'


const SignUp = () => {
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await axios.post("https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users", {
                username: values.name,
                email: values.email,
                password: values.password,
            });
            navigate("/Login");
        } catch (error) {
            setServerError(error.response?.data?.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center"><Link to='/'><img className="h-10 " src={Logo} alt="" /></Link></div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 6) {
                            errors.password = 'Password must be 6 characters';
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    User name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onBlur={handleBlur}
                                        value={values.name}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.name && touched.name ? 'ring-red-500' : ''}`}
                                    />
                                    {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onBlur={handleBlur}
                                        value={values.email}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email && touched.email ? 'ring-red-500' : ''}`}
                                    />
                                    {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password && touched.password ? 'ring-red-500' : ''}`}
                                    />
                                    {errors.password && touched.password && <div className="text-red-600">{errors.password}</div>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full justify-center rounded-md bg-[#da6129] hover:bg-[#e28154] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                            {serverError && <div className="text-red-600">{serverError}</div>}
                        </form>
                    )}
                </Formik>

                <p className="mt-10 text-center text-sm text-gray-500">
                    You have an account
                    <Link to="/login" className="font-semibold leading-6 text-[#da6129] hover:text-[#e28154]">
                        Log in
                    </Link>
                </p>
                <p className=" text-center text-sm text-gray-500">
                    Back to 
                    <Link to="/" className="pl-[3px] font-semibold leading-6 text-[#da6129] hover:text-[#e28154]">
                        home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
