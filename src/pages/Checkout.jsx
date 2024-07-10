import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'


const Checkout = () => {

    const [Orders, setOrders] = useState([])
    const [productTotal, setProductTotals] = useState(0)
    const getLocal = localStorage.getItem("id")




    useEffect(()=>{
        getAllItems()
        getWholeTotal()

    },[])

 
    const getAllItems= ()=>{
        axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
            let cartInfo = res.data.cartItem
            setOrders(cartInfo)
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

        const RemoveCart = ()=>{
            axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`).then((res)=>{
                let arr = res.data.cartItem

                if(arr && arr !==undefined && arr.length>0){
                    let OrderNumber
                    let allPrevoiuse = []
                    let arr2 = []
                    if(res.data.previousOrders){

                        allPrevoiuse = [...res.data.previousOrders]
                    } 

                       allPrevoiuse.push(arr)            
                    axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
                        previousOrders:allPrevoiuse
                    }).then((res2)=>{
                        axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
                            cartItem:[]
                        }).then((res2)=>{
                            
                        })
                        
                    })

                }
             

             

            })

        }
  
  return (
    <>
    <Nav />
    <div className='grid grid-cols-2  mt-16'>
    <form className='flex items-start justify-evenly '>
        {/* left side */}
        <div className="">
            <p className='text-[30px] font-bold mb-[50px]'>Delivery Information</p>
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='First Name' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Last Name'  />
            </div>
            {/* <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='email' placeholder='Email Address' /> */}
            <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='Street' />
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]'  type="text" placeholder='City' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='State'  />
            </div>
            <div className="flex gap-[10px]">
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Zip code' />
                <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type="text" placeholder='Country'  />
            </div>
            <input className='mb-[15px] w-[100%] p-[10px] border border-solid border-[#c5c5c5] rounded-[4px] outline-[#f35d21]' type='text' placeholder='Phone' />
      {/* {console.log("The Location is", geo)} */}
       {/* <button onClick={userLocation}>Get Location</button>
       <h1>Current Location</h1>
       {console.log(currLocation)}
      <p>Latitude: {currLocation.state}</p>
      <p>Longitude: {currLocation.country}</p>
      <p>City: {currLocation.city}</p> */}
        </div>
        </form>

        <div className="w-[90%]">
        <div className="flex-1 flex flex-col ">
            <h2 className='text-[1.5rem] font-bold'>Order Summary</h2>
         
            <div className='flex flex-col mt-12'>
                {Orders&&(
                    
                   
                    Orders.map((item,index)=>(
                        <div key={index} className='flex justify-between '>

                            <div className='flex'>
                            <p className='font-medium pr-2 text-[#da6129]'>{item.qty}X{item.price}</p>
                            <p>{item.productName}</p>
                            </div>
                            
                            <div>
                            <p className='font-medium'>{item.price*item.qty} $</p>
                                </div>
                            

                        </div>
                    ))
                    
                )}
                <hr className='my-4 ' />
                <div className='mt-4'>
                <div className="flex justify-between text-[#555]">
                    <p>Delivery </p>
                    <p className='font-bold'>2 $</p>
                </div>
                <hr className='my-4 ' />
                <div className="flex justify-between text-[#555]">
                    <p >Total</p>
                    <p className='font-bold'>{productTotal}</p>
                </div>

                </div>
                
            </div>
          
           <button className="btn text-white text-[1.3rem]  bg-[#da6129] mt-10 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer" onClick={()=>{RemoveCart
            document.getElementById('my_modal_4').showModal()

           }}>Buy</button>
            <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
        </div>
    

    </div>

        {/* right side */}
        
    <Footer />
    </>
  )
}

export default Checkout