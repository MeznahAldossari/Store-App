import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


const PreviousOrders = () => {
  return (
    <>
    <Nav />
<div className='flex justify-center items-center mt-11'>
<div className='w-[50vw] flex flex-col gap-4'>
    <h2 className='text-[1.5rem] font-bold'>Previous Orders</h2>
    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
            <p>hello</p>
        </div>
    </div>
    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
            <p>hello</p>
        </div>
    </div>

</div>
</div>



    <Footer />
    </>
  )
}

export default PreviousOrders