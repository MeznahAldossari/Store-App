import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/LogInSlice';
import Logo from '../assets/foodly-logo.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const validate = () => {
      let validation = {};
  
      if (!email) {
          validation.email = "Email is required";
        } 
      if (!password) {
        validation.password = 'Password is required';
      }
  
      return validation;
    };
  
    const Submit = async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        try {
          const response = await axios.get('https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users');
  
          if (response.data.length > 0) {
            const user = response.data.find(user => user.email === email && user.password === password );
            if (user) {
            dispatch(login());
            localStorage.setItem("id",user.id)
              navigate(`/`);
            } 
           
            
            else {
              setErrors({ general: 'Please check your username and password.' });
            }
          } else {
            setErrors({ general: 'No users found. Please try again later.' });
          }
        } catch (error) {
          console.error('Error logging in:', error);
          setErrors({ general: 'Error logging in. Please try again later.' });
        }
      }
    };
  
  return (
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center"><Link to="/"><img className="h-10 " src={Logo} alt="" /></Link></div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={Submit}>
        <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6}`}
              />
              {errors.email && (
   <div role="alert" className="alert alert-warning mt-4">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     className="h-6 w-6 shrink-0 stroke-current"
     fill="none"
     viewBox="0 0 24 24">
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
   </svg>
   <span>{errors.email}</span>
 </div>              )}
            </div>
          </div>


          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.password && (
   <div role="alert" className="alert alert-warning mt-4">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     className="h-6 w-6 shrink-0 stroke-current"
     fill="none"
     viewBox="0 0 24 24">
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
   </svg>
   <span>{errors.password}</span>
 </div>              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#da6129] hover:bg-[#e28154] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
            {errors.general && (
        <div role="alert" className="alert alert-warning mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>{errors.general}</span>
      </div>
             )}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/SignUp"
            className="font-semibold leading-6 text-[#da6129] hover:text-[#e28154]"
          >
            Sign up
          </Link>
        </p>
        <p className=" text-center text-sm text-gray-500">
            Back to 
            <Link to="/" className="pl-[3px] font-semibold leading-6 text-[#da6129] hover:text-[#e28154]">
                home
            </Link>
        </p>
      </div>
    </div>  )
}

export default Login