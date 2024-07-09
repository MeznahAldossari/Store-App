import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Meal from '../assets/meal.jpeg'
import Remove from '../assets/remove.png'
import Plus from '../assets/plus1.png'
import Minus from '../assets/minus.png'
import axios from 'axios'


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
                {allProducts && (
                    <>
                    {allProducts.map((item, index) =>(
                        <>
                        <tr className=' ' key={index}>
                            <td className='flex justify-center '><img className='w-[5vw]' src={item.image} alt="" /></td>
                            <td className='text-center '>{item.productName}</td>
                            <td className='text-center'>{item.price}</td>
                            <td className='text-center'>
                            <div className='flex flex-col justify-between h-full py-2 items-center '>
                            <p>{item.qty}</p>
                            <div className='flex gap-2 justify-center items-center mt-4'>
                                
                                <img className='w-5 h-5' src={Plus} onClick={()=>AddQTY(item.prodID)} alt="" />
                                <img className='w-5 h-5' src={Minus}  onClick={()=>removeQTY(item.prodID)} alt="" />
                            </div>
                            </div>
                            </td>
                            <td className='text-center'>{item.qty*item.price}</td>
                            <td className='text-center'><img className='w-[2vw] m-auto curser-pointer' src={Remove} alt="" onClick={()=> removeItem(item.prodID)} /></td>
                        </tr>
                        
                        </>
                    ))}
                   
                    </>
                )}
                {/* <tr className=' '>
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
                </tr> */}
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
                    <p>Delivery Fees </p>
                    <p className='font-bold'>2</p>
                </div>
                <hr className='my-4 ' />
                <div className="flex justify-between text-[#555]">
                    <p >Total</p>
                    <p className='font-bold'>{productTotal}</p>
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