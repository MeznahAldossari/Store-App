import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <>
    <Nav />
    <form className='flex items-start justify-evenly gap-[50px] mt-[80px]'>
        {/* left side */}
        <div className="w-[100%] max-w-[30%]">
            <p className='text-[30px] font-bold mb-[50px]'>Delivery Information</p>
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='First Name' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Last Name'  />
            </div>
            {/* <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='email' placeholder='Email Address' /> */}
            <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='Street' />
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='City' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='State'  />
            </div>
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Zip code' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Country'  />
            </div>
            <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type='text' placeholder='Phone' />
        </div>
        {/* right side */}
        <div className="w-[100%] max-w-[40%]">
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
            <button className='text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer'>Proceed to Payment</button>
        </div>
        </div>
    </form>
    <Footer />
    </>
  )
}

export default Checkout