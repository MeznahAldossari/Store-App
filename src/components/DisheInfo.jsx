import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';



const DisheInfo = () => {
    const [dishes, setDishes] = useState([]);
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({})
    const getLocal = localStorage.getItem("id")


    
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
                    arr.push({
                      "id": String(arr.length++),
                      "prodID":productID,
                      "userID":getLocal,
                      "image":productInfo.image,
                      "productName": productInfo.product,
                      "price": productInfo.price,
                      "qty": 1
                    })
                  }else{
                    alert("the item Already Exists")
                  }

                }else{
                  arr.push({
                    "id": "1",
                    "prodID":productID,
                    "userID":getLocal,
                    "image":productInfo.image,
                    "productName": productInfo.product,
                    "price": productInfo.price,
                    "qty": 1
                  })

                }
                axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`,{
                  cartItem:arr
                }).then({

                })



              })

            }

            
          
          })
        

      }
  return (
    <div key={id} className='w-[100%]  m-auto rounded-[15px] shadow-inner'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
    <div className="relative ">
        <img className='w-[100%]  rounded-[15px]' src={dishes.image} />
    </div>
    <div className="p-[20px] ">
        <div className="flex justify-between items-center mb-[10px]">
            <p className='text-[20px] font-medium'>{dishes.product}</p>
            {/* <img className='w-[70px]'>rating stars</img> */}
        </div>
        <p className="text-[#676767] text-[14px]">{dishes.discription}</p>
        <p className="text-[#e46634] text-[22px] font-medium my-4">{dishes.price}$</p>
        <button onClick={()=>AddToCart(id)}>Add To Cart</button>
    </div>
</div>
  )
}

export default DisheInfo