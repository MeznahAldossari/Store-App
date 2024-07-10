import React, { useEffect } from 'react'
import Logo from '../assets/foodly-logo.png'
import Search from '../assets/search-icon.png'
import Basket from '../assets/basket-icon.png'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/LogInSlice';
import { useNavigate } from 'react-router-dom'; 
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const getLocal = localStorage.getItem("id")
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("id")
    dispatch(logout());
    navigate('/')

  };
  useEffect(()=>{

  },[getLocal])

  const CartItems = ()=>{
    navigate('/Cart')

  }

  return (
    <div className='max-sm:w-full max-sm:overflow-x-hidden'>
      
      <div className='flex w-full justify-between md:hidden h-12'>
  <div className='mt-4 pl-2  w-[80%] float-left'>
    <Link to="/">
      <img className='w-[6rem]' src={Logo} alt="Logo" />
    </Link>
  </div>
  <div className="drawer flex justify-end drawer-end float-right md:hidden  h-full z-50">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content pr-2">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button bg-white h-[3vh] z-40 btn border-none">
        <GiHamburgerMenu style={{ color: "black" }} />
      </label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className=" drawer-overlay"></label>
      <ul className="menu text-base-content w-full m-auto flex flex-col items-center pr-10 min-h-full p-4 ">
        {/* Sidebar content here */}
        <Link to='/'>
          <li className="mt-24 flex items-center text-[1.5rem] text-white">
            Home
          </li>
        </Link>
        {getLocal !==undefined && getLocal &&(
          <>
           <li className='md:hidden flex items-center mt-1 text-white'>
          <Link to="/Cart">
            
            <li className="mt-4 flex items-center text-[1.5rem] text-white">
            Cart
          </li>
            
          </Link>
        </li>
        <Link to="/PreviousOrders">
          <li className='leading-loose mt-2  flex items-center text-[1.5rem] text-white'>
            Previous Orders
          </li>
        </Link>
          </>
        )}
       
      </ul>
    </div>
  </div>
</div>




    <div className='px-5 py-4 flex  justify-between items-center max-sm:hidden'>
        <Link to="/"><img className='w-[150px] ' src={Logo} /></Link>
        <ul className='flex list-none gap-10 text-[#49557e] text-[18px]'>
        {/* <Link to='/'> <li className='hover:text-[#da6129] text-[1.2rem] cursor-pointer'>Home</li></Link> */}
            {/* <li className='hover:text-[#da6129] text-[1.2rem] cursor-pointer'>Menu</li> */}
            {getLocal !==undefined && getLocal &&(<>
              <Link to='/PreviousOrders'><li className='text-[1.2rem] hover:text-[#da6129] cursor-pointer'>Previous Orders</li></Link>

            </>)  } 
        </ul>
        <div className='flex items-center gap-10'>
            {/* <img className='w-[2vw]' src={Search}/> */}
            {getLocal !==undefined && getLocal &&(
              <div>
              <div className='relative '>
                <button onClick={CartItems}><img className='w-[2vw]' src={Basket} /></button>
                {/* <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[8px] right-[8px]'></div> */}
            </div>
            
              </div>
            )}
            
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
    </div>
  )
}

export default Nav