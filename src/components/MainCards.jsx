import React from 'react'

function MainCards() {
  return (
    <div>
        <div className='flex justify-between'>
      <h2 className='text-[24px] font-bold '>All Dishes</h2>
      <div className='flex gap-1'>
      <input
            type="text"
            className="border  border-gray-300 rounded-lg px-3 py-2 w-[25vw]"
            placeholder='Search Dishes by name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex  justify-center rounded-lg bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSearch}

          >
            Search
          </button>
      </div>
   
      </div>

      <div className='flex justify-center w-full mt-4'>
        <div className='grid grid-cols-4 gap-y-16 mt-[30px] gap-[30px] row-gap-[30px]'> {/*grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); css*/}
            {/* {map method start here} */}
            {dishes.map((dishe, id) => (
<div key={id} className='h-[65vh] items-stretch'>
         <div className=' rounded-[15px] shadow-inner'> {/*box-shadow: 0px 0px 10px #00000015; css*/}
                <div className="h-[36vh]">
                    <img className='w-[100%] h-[40vh] rounded-[15px]' src={dishe.image} />
                </div>
                <div className="p-[20px] max-h-24">
                    <div className="flex justify-between items-center mb-[10px]">
                        <p className='text-[1.2rem]  w-[100%]  mt-4 font-medium'>{dishe.product}</p>
                        {/* <img className='w-[70px]'>rating stars</img> */}
                    </div>
                    <div className='py-2'>
                    <p className="text-[#e46634] text-[22px] font-medium my-2">{dishe.price}$</p>
                    <Link to={`/DisheInfo/${dishe.id}`}><p className='text-[#e46634] hover:text-[#fa8f64] flex justify-end'>More Details</p></Link>
                    </div>
                   
                </div>
            </div>

            </div>

                          ))}

            {/* {map method end here} */}
        </div> 
        </div>   
      
    </div>
  )
}

export default MainCards
