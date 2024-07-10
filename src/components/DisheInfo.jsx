import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Basket from '../assets/basket-icon.png';

const DisheInfo = () => {
  const [dishes, setDishes] = useState({});
  const { id } = useParams();
  const getLocal = localStorage.getItem("id");
  const [message, setMessage] = useState({});

  useEffect(() => {
    axios.get(`https://665736969f970b3b36c8658a.mockapi.io/Products/${id}`)
      .then(response => {
        const dishesData = response.data;
        setDishes(dishesData);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const AddToCart = (productID) => {
    axios.get(`https://665736969f970b3b36c8658a.mockapi.io/Products/${productID}`)
      .then(response => {
        let productInfo = response.data;

        if (productInfo && productInfo !== undefined) {
          axios.get(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`)
            .then(res => {
              let arr = [];
              if ("cartItem" in res.data) {
                arr = res.data.cartItem;
                let checkUnique = arr.find(prod => prod.prodID === productID);

                if (!checkUnique) {
                  let count = arr.length;
                  arr.push({
                    "id": String(count + 1),
                    "prodID": productID,
                    "userID": getLocal,
                    "image": productInfo.image,
                    "productName": productInfo.product,
                    "price": productInfo.price,
                    "qty": 1,
                    "status": "uncomplete"
                  });
                  setMessage({ successful: "The item is added to cart" });
                } else {
                  setMessage({ exists: "The item already exists" });
                }
              } else {
                arr.push({
                  "id": "1",
                  "prodID": productID,
                  "userID": getLocal,
                  "image": productInfo.image,
                  "productName": productInfo.product,
                  "price": productInfo.price,
                  "qty": 1,
                  "status": "uncomplete"
                });
                setMessage({ successful: "The item is added to cart" });
              }
              axios.put(`https://667b1a30bd627f0dcc91b421.mockapi.io/Users/Users/${getLocal}`, {
                cartItem: arr
              }).then(() => {
                // Handle any additional actions after update
              });
            });
        }
      });
  }

  return (
    <>
      <Nav />
      <div className='mt-20 '>
        <div key={id} className='w-[80%] m-auto rounded-[15px] shadow flex'>
          <div className="relative">
            <img className='w-[20vw] h-[40vh] rounded-[15px]' src={dishes.image} alt={dishes.product} />
          </div>
          <div className="p-[20px]">
            <div className="flex items-end justify-between mb-[10px]">
              <p className='text-[20px] font-medium'>{dishes.product}</p>
              {/* <img className='w-[70px]'>rating stars</img> */}
            </div>
            <div className='flex flex-col justify-between h-[50%]'>
              <div>
                <p className="text-[#676767] text-[14px]">{dishes.description}</p>
                <p className="text-[#e46634] text-[22px] font-medium my-4">{dishes.price}$</p>
              </div>
              <div className='flex gap-4'>
                <button className='text-white bg-[#da6129] mt-6 hover:bg-[#e28154] w-[200px] py-3 rounded-[4px] cursor-pointer' onClick={() => AddToCart(id)}>Add To Cart</button>
                <Link to="/"><button className='text-white bg-[#616161] mt-6 hover:bg-[#757575] w-[200px] py-3 rounded-[4px] cursor-pointer'>Back</button></Link>
              </div>
              {/* start of message */}
              <div className='mt-7'>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisheInfo;
