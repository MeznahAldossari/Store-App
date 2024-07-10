import React, { useState, useEffect } from 'react'
// import Meal from '../assets/meal.jpeg'
// import Plus from '../assets/plus.png'
// import PlusGreen from '../assets/plus1.png'
// import Minus from '../assets/minus.png'
import axios from 'axios';
import { Link } from 'react-router-dom';






const FoodDisplay = () => {
    const [count, setCount]=useState(0)
    const [dishes, setDishes] = useState([]);
    const [allDishes, setAllDishes] = useState([]); 
    const [search, setSearch] = useState('');


    
  useEffect(() => {
    axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
      .then(response => {
        const dishesData = response.data;
        setDishes(dishesData);
        setAllDishes(dishesData);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearch = () => {
    if (search.trim() !== '') {
      const filteredDishes = allDishes.filter(dishe =>
        dishe.product.toLowerCase().includes(search.toLowerCase())
      );
      setDishes(filteredDishes);
    } else {
      setDishes(allDishes);
    }
  };
  return (
    <div className='mt-[30px] '>
      <div className='flex justify-between'>
      <h2 className='text-[24px] font-bold '>Top Dishes</h2>
      <div className='flex gap-1'>
      <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-52"
            placeholder='Search Dishes by name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex  justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSearch}

          >
            Search
          </button>
      </div>
   
      </div>
        <div className='grid grid-cols-4 mt-[30px] gap-[30px] row-gap-[30px]'> {/*grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); css*/}
            {/* {map method start here} */}
            {dishes.map((dishe, id) => (
<div key={id}>
         <div className='w-[100%] m-auto rounded-[15px] shadow-inner'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
                <div className="relative ">
                    <img className='w-[100%] rounded-[15px]' src={dishe.image} />
                </div>
                <div className="p-[20px] ">
                    <div className="flex justify-between items-center mb-[10px]">
                        <p className='text-[20px] font-medium'>{dishe.product}</p>
                        {/* <img className='w-[70px]'>rating stars</img> */}
                    </div>
                    <p className="text-[#e46634] text-[22px] font-medium my-4">{dishe.price}$</p>
                    <Link to={`/DisheInfo/${dishe.id}`}><p className='text-[#e46634] hover:text-[#fa8f64] flex justify-end'>More Details</p></Link>
                </div>
            </div>

            </div>

                          ))}

            {/* {map method end here} */}
        </div>    
    </div>
  )
}

export default FoodDisplay