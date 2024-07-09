import React from 'react'
const Header = () => {
  return (
    <>
    <div className='h-[34vw] my-[30px] mx-auto bg-[#f55314] bg-contain relative'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
            <h2 className='font-medium text-white text-[63px]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
    </div>
    </>
    )
}

export default Header