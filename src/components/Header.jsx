import React from 'react'
const Header = () => {
  return (
    <>
    <div className='h-[34vw] my-[30px] mx-auto bg-[#f55314] bg-contain relative'>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
            <h2 className='font-medium text-white text-[63px]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>choose from Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus ipsum! .</p>
            <button className='text-[#747474] font-medium p-[1vw] bg-white text-[1vw] rounded-full'>View Menu</button>
        </div>
    </div>
    </>
    )
}

export default Header