import React, { useEffect, useState } from 'react'
import Logo from '../assets/foodly-logo.png'
import Search from '../assets/search-icon.png'
import Basket from '../assets/basket-icon.png'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/LogInSlice';
import { useNavigate } from 'react-router-dom'; 
import { GiHamburgerMenu } from "react-icons/gi";
import axios from 'axios';


const Nav = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const getLocal = localStorage.getItem("id")
  const navigate = useNavigate()
  const [counts, setCounts] = useState(0)

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("id")
    dispatch(logout());
    navigate('/')

  };
  useEffect(()=>{
    getAllItems()

  },[getLocal, counts])

  const CartItems = ()=>{
    navigate('/Cart')

  }
  const getAllItems = ()=>{
    axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
      let myInfo = res.data.cartItem

      if(myInfo && myInfo!==undefined){
        setCounts(myInfo.length)

      }
    })
  }

  return (
    <>
    <div className='px-5 py-4 flex  justify-between items-center'>
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
               
                  <div className='w-4 h-4 flex justify-center items-center font-medium text-[0.5rem] rounded-full bg-red-700 text-white'>{counts}</div>
                
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
    </>
  )
}

export default Nav