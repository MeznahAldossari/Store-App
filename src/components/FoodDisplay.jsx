import React, { useState, useEffect } from 'react'
// import Meal from '../assets/meal.jpeg'
// import Plus from '../assets/plus.png'
// import PlusGreen from '../assets/plus1.png'
// import Minus from '../assets/minus.png'
import axios from 'axios';
import { Link } from 'react-router-dom';






const FoodDisplay = ({categoryFood}) => {
    const [count, setCount]=useState(0)
    const [dishes, setDishes] = useState([]);
    const [allDishes, setAllDishes] = useState([]); 
    const [search, setSearch] = useState('');
    const [noDishesFound, setNoDishesFound] = useState(false);


    
  useEffect(() => {
    getProducts()
  
  }, [categoryFood]);


  const getProducts= ()=>{
    axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
    .then(response => {
      const dishesData = response.data;
      if(categoryFood &&categoryFood === "All"){
        setDishes(dishesData)
        
      }else if(categoryFood &&categoryFood === "pizza"){
        let results = response.data.filter((item)=> item.category === "pizza")
        setDishes(results)
      }else if(categoryFood &&categoryFood === "burgers"){
        let results = response.data.filter((item)=> item.category === "burgers")
        setDishes(results)
      }else{
        let results = response.data.filter((item)=> item.category === "Desserts")
        setDishes(results)
      }
      // setDishes(dishesData);
      setAllDishes(dishesData);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });

  }
  const handleSearch = () => {
    if (search.trim() !== '') {
      const filteredDishes = allDishes.filter(dishe =>
        dishe.product.toLowerCase().includes(search.toLowerCase())
      );
      setDishes(filteredDishes);
      setNoDishesFound(filteredDishes.length === 0);
    } else {
      setDishes(allDishes);
      setNoDishesFound(false);
    }
  };
  return (
    <div className='mt-[30px] '>
      <div className='flex justify-between'>
      <h2 className='text-[24px] font-bold max-sm:text-[20px] '>All Dishes</h2>
      <div className='flex gap-1'>
      <input
            type="text"
            className="border max-sm:h-[4vh] max-sm:w-[32vw]  border-gray-300 rounded-lg px-3 py-2 w-[25vw]"
            placeholder='Search..'
            value={search}
            onChange={(e) => {setSearch(e.target.value)
              setDishes(allDishes)}
            }
          />
          <button
            className="flex max-sm:h-[4vh]  justify-center rounded-lg bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSearch}

          >
            Search
          </button>
      </div>
   
      </div>
      
      <div className='flex justify-center w-full'>
        <div className='grid grid-cols-4 gap-y-16 max-sm:gay-y-1 mt-[30px] gap-[30px] max-sm:row-gap-[2px] row-gap-[30px] max-sm:grid-cols-1'> {/*grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); css*/}
        {noDishesFound ? (
        <p className=' text-2xl font-semibold'>No dishes found</p>
      ) : (
            dishes.map((dishe, id) => (
<div key={id} className='h-[65vh] max-sm:h-[50vh]  items-stretch'>
         <div className=' rounded-[15px] shadow-inner'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
                <div className="h-[36vh]">
                    <img className='w-[100%] h-[40vh] rounded-[15px]' src={dishe.image} />
                </div>
                <div className="p-[20px] max-h-24">
                    <div className="flex justify-between items-center mb-[10px]">
                        <p className='text-[1.2rem]  w-[100%]  mt-4 font-medium'>{dishe.product}</p>
                        {/* <img className='w-[70px]'>rating stars</img> */}
                    </div>
                    
                        <div className='flex justify-between py-1'>
                        <p className="text-[#e46634] text-[22px] font-medium my-2">{dishe.price}$</p>
                        <Link to={`/DisheInfo/${dishe.id}`} className=' flex justify-center items-center'><p className='text-[#e46634] hover:text-[#fa8f64] flex justify-end'>More Details</p></Link>
                        </div>
                   
                    
                   
                </div>
            </div>

            </div>

))
)}          

        </div> 
        </div>   
    </div>
  )
}

export default FoodDisplay