import React from 'react'
import Navbar from '../../Component/Layout/Navbar'
import Inspiredproducts from '../../Component/InspiredProducts'
import './style.scss'


function Home() {

  return (
    <div className='home'>

        <Navbar></Navbar>
        <Inspiredproducts></Inspiredproducts>

    </div>
  )
}

export default Home