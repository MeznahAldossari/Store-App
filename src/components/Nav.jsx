import React from 'react'
import Logo from '../assets/foodly-logo.png'
import Search from '../assets/search-icon.png'
import Basket from '../assets/basket-icon.png'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/LogInSlice'; 


const Nav = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("id")
    dispatch(logout());
  };


  return (
    <>
    <div className='p-5 flex justify-between items-center'>
        <img className='w-[150px] ' src={Logo} />
        <ul className='flex list-none gap-5 text-[#49557e] text-[18px]'>
            <li>home</li>
            <li>menu</li>
            <li>contact us</li>
        </ul>
        <div className='flex items-center gap-10'>
            <img className='w-[2vw]' src={Search}/>
            <div className='relative '>
                <img className='w-[2vw]' src={Basket} />
                {/* <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[8px] right-[8px]'></div> */}
            </div>
            {isLoggedIn ? (
 <button  
 onClick={handleLogout}
className='bg-transparent text-[16px] text-[#49557e] border border-solid border-[tomato] px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#fff4f2] transition-[0.3s]'>Log out</button> 
       ) : (
<Link to={"/Login"}>
            <button   
                
 className='bg-transparent text-[16px] text-[#49557e] border border-solid border-[tomato] px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#fff4f2] transition-[0.3s]'>sign in</button>
            </Link>
                  )}
            
           
        </div>
    </div>
    </>
  )
}

export default Nav