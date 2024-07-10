import React, { useState } from 'react'
import Meal from '../assets/all-meal.jpg'
import pizzas from '../assets/pizza.jpg'
import sweet from '../assets/sweet.jpg'
import burger from '../assets/burger.jpg'
import FoodDisplay from './FoodDisplay'
const ExploreMenu = () => {
    const [cateoryOption, setCategoryOption] = useState("All")
  return (
    <div className='flex flex-col gap-5 '>
        <h1 className='text-[#262626] font-medium text-[30px] max-sm:text-[25px]'>Explore Our Menu</h1>
        <p className='w-full text-[1.1rem] max-sm:text-[0.9rem]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list flex justify-between items-center gap-[30px] text-center my-5 '> {/*hidden scroll*/}
            {/* {map here} */}
            <div className='items flex gap-6 max-sm:gap-2'>
                <div onClick={()=>setCategoryOption("All")}>
                    <img className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s] duration-500 hover:scale-125' src={Meal} />
                    <p className=' mt-[10px] text-[#747474] text-[16px] cursor-pointer'>All</p>
                </div>

                <div onClick={()=>setCategoryOption("burgers")}>
                    <img className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s] duration-500 hover:scale-125' src={burger} />
                    <p className=' mt-[10px] text-[#747474] text-[16px] cursor-pointer'>burgers</p>
                </div>

                <div onClick={()=>setCategoryOption("Desserts")}>
                    <img className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s]  duration-500 hover:scale-125 ' src={sweet} />
                    <p className=' mt-[10px] text-[#747474] text-[16px] cursor-pointer'>Desserts</p>
                </div>

                <div onClick={()=>setCategoryOption("pizza")}>
                    <img className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s] duration-500 hover:scale-125' src={pizzas} />
                    <p className=' mt-[10px] text-[#747474] text-[16px] cursor-pointer'>pizza</p>
                </div>
            </div>
            {/* end here */}
            {/* <hr className='my-4 h-[2px] bg-[#999999] border-none' /> */}
        </div>
        <FoodDisplay categoryFood={cateoryOption}/>
    </div>
)
}

export default ExploreMenu