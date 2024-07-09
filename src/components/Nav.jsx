import React from 'react'
import Logo from '../assets/foodly-logo.png'
import Search from '../assets/search-icon.png'
import Basket from '../assets/basket-icon.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='p-5 flex justify-between items-center'>
        <Link to="/"><img className='w-[150px] ' src={Logo} /></Link>
        <ul className='flex list-none gap-5 text-[#49557e] text-[18px]'>
            <li>home</li>
            <li>menu</li>
            <li>contact us</li>
        </ul>
        <div className='flex items-center gap-10'>
            <img className='w-[2vw]' src={Search}/>
            <div className='relative '>
                <Link to='/Cart'><img className='w-[2vw]' src={Basket} /></Link>
                {/* <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[8px] right-[8px]'></div> */}
            </div>
            <button className='bg-transparent text-[16px] text-[#49557e] border border-solid border-[tomato] px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#fff4f2] transition-[0.3s]'>sign in</button>
        </div>
    </div>
    </>
  )
}

export default Nav