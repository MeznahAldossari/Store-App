import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Meal from '../assets/meal.jpeg'
import Remove from '../assets/remove.png'
import Plus from '../assets/plus1.png'
import Minus from '../assets/minus.png'


const Cart = () => {
  return (
    <>
    <Nav />
    <div className='flex flex-col justify-center items-center'> 
    <div className='mt-[100px] w-[70vw] '>
        <div className="cart-items">
            <div className="flex justify-between gap-[80px] items-center text-[gray] text-[12px] ">
              <table className='w-full table-auto '>
                <tr className=''>
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                </tr>
                <hr className='pb-6 mt-2 w-full' />
                <tr className=' '>
                    <td className='flex justify-center '><img className='w-[5vw]' src={Meal} alt="" /></td>
                    <td className='text-center '>name dish</td>
                    <td className='text-center'>Price</td>
                    <td className='text-center'>
                        <div className='flex flex-col justify-between h-full py-2 items-center '>
                            <p>0</p>
                            <div className='flex gap-2 justify-center items-center mt-4'>
                                <img className='w-5 h-5' src={Plus} alt="" />
                                <img className='w-5 h-5' src={Minus} alt="" />
                            </div>
                        </div>
                    </td>
                    <td className='text-center'>Subtotal</td>
                    <td className='text-center '><img className='w-[2vw] m-auto' src={Remove} alt="" /></td>
                </tr>
              </table>
              
                {/* <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p> */}
            </div>
            <br />
            <hr />
            {/* <div className="flex justify-between gap-[80px] items-center text-[gray] text-[12px] my-2.5">
                <img className='w-[5vw]' src={Meal} alt="" />
                <p>name dish</p>
                <p>$price</p>
                <p>3</p>
                <p>12</p>
                <img className='w-[2vw]' src={Remove} alt="" />
            </div> */}
        </div>
    </div>
    {/* checkout sec */}
    <div className="mt-[80px] w-[70vw] flex justify-between gap-[20px] ">
        <div className="flex-1 flex flex-col gap-[20px]">
            <h2 className='text-[1.5rem] font-bold'>Cart Totals</h2>
            <div>
                <div className="flex justify-between text-[#555]">
                    <p>Delivery </p>
                    <p className='font-bold'>2</p>
                </div>
                <hr className='my-4 ' />
                <div className="flex justify-between text-[#555]">
                    <p >Total</p>
                    <p className='font-bold'>12</p>
                </div>
            </div>
            <button className='text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer'>Proceed to checkout</button>
        </div>
        {/* <div className="promocode">
            <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='input'>
                    <input type='text' placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div> */}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Cart