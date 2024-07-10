import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Meal from '../assets/meal.jpeg'
import Remove from '../assets/remove.png'
import Plus from '../assets/pluss.png'
import Minus from '../assets/minus3.png'
import axios from 'axios'

import { Link } from 'react-router-dom';

const Cart = () => {
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
                if(res.data.cartItem && res.data.cartItem !==undefined){
                    setAllProducts(res.data.cartItem)

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
const AddQTY = (itemID)=>{
    axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
        let finding = res.data.cartItem
        let increaseQTY = finding.map((item)=>{
            if(item.prodID ===itemID ){
              return {...item, "qty":item.qty + 1}
            }

            return item
    })
    axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
        cartItem: increaseQTY

    }).then((res)=>{
        setAllProducts([...increaseQTY])

        let Prices =  increaseQTY.reduce((prev ,item) => {
            return prev + (item.qty*item.price);
          }, 0)
         console.log("the total is 2 "+ Prices)
          setProductTotals(Prices)
    })})

}

const removeQTY = (itemID)=>{

    axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
        let finding = res.data.cartItem
        let increaseQTY = finding.map((item)=>{
            if(item.prodID ===itemID && item.qty > 1){
              return {...item, "qty":item.qty - 1}
            }

            return item
    })
    axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
        cartItem: increaseQTY

    }).then((res)=>{
        setAllProducts([...increaseQTY])

        let Prices =  increaseQTY.reduce((prev ,item) => {
            return prev + (item.qty*item.price);
          }, 0)
         console.log("the total is 2 "+ Prices)
          setProductTotals(Prices)
    })})


}
const removeItem = (itemID)=>{
    axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
        let userCart = res.data.cartItem
        let finding = userCart.filter((e)=> e.prodID !== itemID)


        axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
            cartItem: finding
    
        }).then((res)=>{
    
            setAllProducts(allProducts.filter((p)=>p.prodID !==itemID))
            let Prices =  finding.reduce((prev ,item) => {
                return prev + (item.qty*item.price);
              }, 0)
    
              console.log("#########"+ Prices)
              setProductTotals(Prices)
        })

    })

}


  return (
    <>
    <Nav />
    <div className='flex flex-col justify-center items-center'> 
    <div className='mt-[100px] w-[70vw] max-sm:w-[100vw]'>
        <div className="cart-items">
            <div className="flex justify-between gap-[80px] items-center text-[gray] text-[12px] ">
            {allProducts.length >0 ? (
                    <>
              <table className='w-full table-auto '>
                <tr className='text-[18px] border-b-[1.5px] mt- max-sm:text-[14px]'>
                    <th className='pb-2'>Items</th>
                    <th className='pb-2'>Title</th>
                    <th className='pb-2'>Price</th>
                    <th className='pb-2'>Quantity</th>
                    <th className='pb-2'>Subtotal</th>
                    <th className='pb-2'>Remove</th>
                </tr>
                
                
                    {allProducts.map((item, index) =>(
                        <>
                        <tr className='h-24  ' key={index}>
                            <td className='flex justify-center '><img className='w-[5vw] mt-4 max-sm:w-[20vw]' src={item.image} alt="" /></td>
                            <td className='text-center text-[0.9rem] max-sm:text-[0.8rem] '>{item.productName}</td>
                            <td className='text-center text-[0.9rem] max-sm:text-[0.8rem]'>{item.price}</td>
                            <td className='text-center'>
                            <div className='flex flex-col justify-between h-full py-2 items-center '>
                            <p className='text-[0.9rem] max-sm:text-[0.8rem]'>{item.qty}</p>
                            <div className='flex gap-2 justify-center items-center mt-4'>
                                
                                <img className='w-5 h-5 cursor-pointer' src={Plus} onClick={()=>AddQTY(item.prodID)} alt="" />
                                <img className='w-5 h-5 cursor-pointer' src={Minus}  onClick={()=>removeQTY(item.prodID)} alt="" />
                            </div>
                            </div>
                            </td>
                            <td className='text-center text-[0.9rem] max-sm:text-[0.8rem]'>{item.qty*item.price}</td>
                            <td className='text-center'><img className='w-[2vw] m-auto curser-pointer max-sm:w-[5vw]' src={Remove} alt="" onClick={()=> removeItem(item.prodID)} /></td>
                        </tr>
                        
                        </>
                    ))}

                   
                    
               
                
                </table>
                </>
              ):(<>
              <p className='text-[1.1rem]'>No Items added in your cart ...</p>
              </>)}
            </div>
            <br />
            <hr />
          
        </div>
    </div>
    {/* checkout sec */}
    <div className="mt-[80px] w-[70vw] flex justify-between gap-[20px] ">
        <div className="flex-1 flex flex-col gap-[20px]">
            <h2 className='text-[1.5rem] font-bold'>Cart Totals</h2>
            <div>
                <div className="flex justify-between text-[#555]">
                    <p>Delivery Fees </p>
                    <p className='font-bold'>2 $</p>
                </div>
                <hr className='my-4 ' />
                <div className="flex justify-between text-[#555]">
                    <p >Total</p>
                    <p className='font-bold'>{productTotal} $</p>
                </div>
            </div>
            {allProducts.length >0?(
                <>
                  <Link to='/Order'>
            <button className='text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer '>Proceed to checkout</button></Link>
        
            </>):(
                <>
                   <button className="btn text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer" onClick={()=>document.getElementById('my_modal_4').showModal()
           }>Proceed to checkout</button>
           
              <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-[50vw] max-w-5xl">
               
                <p className="py-4">There are No Items in Cart</p>
                <div className="modal-action">
                <form method="dialog">
                
                    <button className="btn bg-[#da6129] text-white">Ok</button>
                   
                    
                </form>
                </div>
            </div>
            </dialog>
           
                </>
            )}
          </div>
     
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Cart