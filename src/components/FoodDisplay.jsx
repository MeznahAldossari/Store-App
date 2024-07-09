import React, { useState } from 'react'
import Meal from '../assets/meal.jpeg'
import Plus from '../assets/plus.png'
import PlusGreen from '../assets/plus1.png'
import Minus from '../assets/minus.png'



const FoodDisplay = () => {
    const [count, setCount]=useState(0)
  return (
    <div className='mt-[30px] '>
        <h2 className='text-[24px] font-bold '>Top Dishes</h2>
        <div className='grid grid-cols-4 mt-[30px] gap-[30px] row-gap-[30px]'> {/*grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); css*/}
            {/* {map method start here} */}
            <div className='w-[100%] m-auto rounded-[15px] shadow-inner'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
                <div className="relative ">
                    <img className='w-[100%] rounded-[15px]' src={Meal} />
                    {
                        !count ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=> setCount(prev=>prev+1)} src={Plus} /> : 
                        <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                            <img className='w-[30px]' onClick={()=>setCount(e=>e-1)} src={Minus} alt="" />
                            <p>{count}</p>
                            <img className='w-[30px]' onClick={()=>setCount(e=>e+1)} src={PlusGreen} alt="" />
                        </div>
                    }
                </div>
                <div className="p-[20px] ">
                    <div className="flex justify-between items-center mb-[10px]">
                        <p className='text-[20px] font-medium'>name</p>
                        {/* <img className='w-[70px]'>rating stars</img> */}
                    </div>
                    <p className="text-[#676767] text-[14px]">description</p>
                    <p className="text-[#e46634] text-[22px] font-medium my-4">$18</p>
                </div>
            </div>
            {/* {map method end here} */}
        </div>    
    </div>
  )
}

export default FoodDisplay