import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Basket from '../assets/basket-icon.png';




const DisheInfo = () => {
    const [dishes, setDishes] = useState([]);
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    const getLocal = localStorage.getItem("id")
    const [hiscount, setCount] = useState(0)
    const [message, setMessage] = useState({});


    
    useEffect(() => {
        axios.get(`https://665736969f970b3b36c8658a.mockapi.io/Products/${id}`)
          .then(response => {
            const dishesData = response.data;
            setDishes(dishesData);
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }, []);


      const AddToCart = (productID)=>{
        axios.get(`https://665736969f970b3b36c8658a.mockapi.io/Products/${productID}`)
          .then(response => {
       
            let productInfo = response.data

            if(productInfo && productInfo !== undefined){
              axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`)
              .then(res => {
                let arr = []
                if("cartItem" in res.data) {
                  arr = res.data.cartItem
                  let checkUniques = arr.find((prod)=> prod.prodID ===productID)
 
                  if(!checkUniques && checkUniques == undefined){
                    let count = arr.length
                    arr.push({
                      "id": String(count+1),
                      "prodID":productID,
                      "userID":getLocal,
                      "image":productInfo.image,
                      "productName": productInfo.product,
                      "price": productInfo.price,
                      "qty": 1,
                      "status":"uncomplete"
                    });
                    setMessage({ successful: "The item is added to cart" });
                  } else {
                    setMessage({ exists: "The item already exists" });
                  }
                
                }else{
                  arr.push({
                    "id": "1",
                    "prodID":productID,
                    "userID":getLocal,
                    "image":productInfo.image,
                    "productName": productInfo.product,
                    "price": productInfo.price,
                    "qty": 1,
                     "status":"uncomplete"
                  })
                  
                  setMessage({ successful: "The item is added to cart" });
                }
                axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
                  cartItem:arr
                }).then((res)=>{
                    setCount(hiscount+1)

                })



              })

            }

            
          
          })
        

      }

  return (
    <>
    <Nav itemsTotal = {hiscount}/>
    <div className='flex justify-end px-20 '>
 {/* start of message */}
 <div className='mt-10 mr-10'>
                {message.exists && (
                  <div role="alert" className="alert">
                    <img className='w-[2vw]' src={Basket} alt="Basket Icon" />
                    <span>{message.exists}</span>
                  </div>
                )}
                {message.successful && (
                  <div role="alert" className="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{message.successful}</span>
                  </div>
                )}
              </div>
              </div>
<div className='mt-4 '>
  <div key={id} className=' w-[80%] m-auto rounded-[15px] shadow flex max-sm:flex-col'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
    <div className="relative ">
        <img className='w-[20vw] h-[40vh] rounded-[15px] flex max-sm:w-[100%]' src={dishes.image} />
    </div>
    <div className="p-[20px] ">
        <div className="flex items-end justify-between mb-[10px]">
            <p className='text-[20px] font-medium'>{dishes.product}</p>
            {/* <img className='w-[70px]'>rating stars</img> */}
        </div>
      <div className='flex flex-col justify-between h-[50%]'>
        <div>
          <p className="text-[#676767] text-[14px]">{dishes.discription}</p>
          <p className="text-[#e46634] text-[22px] font-medium my-4">{dishes.price}$</p>
        </div>
        <div className='flex gap-4 max-sm:gap-[2px]  '>
          <button className='text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer max-sm:w-[40vw]' onClick={()=>AddToCart(id)}>Add To Cart</button>
          <Link to="/"><button className='text-white bg-[#616161] mt-6 hover:bg-[#757575] w-[200px] py-3 rounded-[4px] cursor-pointer max-sm:w-[35vw]'>Back</button></Link>
        </div>
      </div>
    </div>
</div>
</div>
<Footer />
</>
  )
}

export default DisheInfo