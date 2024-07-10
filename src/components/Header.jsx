import React from 'react'
import headers from "../assets/headerr.jpg"
const Header = () => {
  return (
    <>
    <div className='h-[34vw] bg-cover my-[30px] mx-auto relative rounded-3xl' style={{backgroundImage:`url(${headers})`, backgroundRepeat:"no-repeat"}}>
        <div className=' flex flex-col pl-12 justify-center b h-full items-start gap-[1.5vw] max-w-[55%] bottom-[20%] left-[6vw]'>
            <h2 className='font-bold text-white text-[3.4rem] leading-normal'>Order your favourite food here</h2>
            <p className='text-white font-medium text-[1rem] text-justify'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
    </div>
    </>
    )
}

export default Header