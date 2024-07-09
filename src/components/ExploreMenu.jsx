import React from 'react'
import Meal from '../assets/meal.jpeg'
const ExploreMenu = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <h1 className='text-[#262626] font-medium text-[30px]'>Explore our menu</h1>
        <p className='max-w-[60%]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list flex justify-between items-center gap-[30px] text-center my-5 '> {/*hidden scroll*/}
            {/* {map here} */}
            <div className='items'>
                <img className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s]' src={Meal} />
                <p className=' mt-[10px] text-[#747474] text-[16px] cursor-pointer'>Name</p>
            </div>
            {/* end here */}
            {/* <hr className='my-4 h-[2px] bg-[#999999] border-none' /> */}
        </div>
    </div>
)
}

export default ExploreMenu