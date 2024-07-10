import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import { json } from 'react-router-dom'



const PreviousOrders = () => {

    const [allProducts, setAllProducts] = useState([])
    const [productTotal, setProductTotals] = useState(0)

    const getLocal = localStorage.getItem("id")



    useEffect(()=>{
        getCartProducts()
        getWholeTotal()
    }, [])


    const getCartProducts = ()=>{
        axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
            console.log("the data is", JSON.stringify(res.data.cartItem))
            if(getLocal && getLocal !==undefined){
                if(res.data.previousOrders && res.data.previousOrders !==undefined){
                    setAllProducts(res.data.previousOrders)
                    // console.log(JSON.stringify(allProducts))
                   

                }
            }


        })


    }

    const getWholeTotal = ()=>
        {
            axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
                let getItems = res.data.cartItem
                let allPrice =  getItems.reduce((prev ,item) => {
                 return prev + (item.qty*item.price);
               }, 0)
     
               console.log("the totla is"+ allPrice)
               setProductTotals(allPrice)
    
            })
           
        }

  return (
    <>
    <div>
    <Nav />

    </div>
   
<div className='flex justify-center items-center mt-11'>
<div className='w-full items-center flex flex-col gap-4'>
    <div className='flex  w-[60vw] max-sm:justify-center '>
    <h2 className='text-[1.5rem] text-left font-bold max-sm:text-center'>Previous Orders</h2>

    </div>
  
   
    <hr className='my-2 ' />
    {allProducts !==undefined ? (
            <>
             {allProducts.map((item,index)=>(
                <>
                 <div className="collapse mt-[-10px] collapse-plus bg-base-200 w-[60vw] max-sm:w-[90vw]">
                   
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl flex justify-between font-medium text-[#da6129]">
                        <p className='text-black'>Order {index+1}</p>
                        {/* <p>{productTotal} $</p> */}

                        </div>
                       
                        <div className="collapse-content">
                        <hr className='my-4 ' />
                         {item.map((e)=>(
                            <div className='flex justify-between'>
                                <div className='flex'>
                                <p className='pr-4 text-[#da6129] font-medium'>{e.qty}X{e.price}</p>
                                <p>{e.productName}</p>
                                </div>
                              <div>
                              <p className='text-[#da6129] font-medium'>{e.price * e.qty}</p>

                                </div>
                          
                            </div>

                         ))}
                            

                         
                        {/* <p>hello</p> */}
                        </div>

                    </div>
                
                </>
             ))}
                   
             
        
                
            </>
        ):(
            <>
            </>
        )}
    {/* <di
    v className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
            <p>hello</p>
        </div>
    </div> */}

</div>
</div>



    <Footer />
    </>
  )
}

export default PreviousOrders