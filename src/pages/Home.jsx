import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <>
    <Nav />
    <div className='w-[80%] m-auto'>
        <Header />
        <ExploreMenu />
        <FoodDisplay />
    </div>
    <Footer />
    </>
  )
}

export default Home