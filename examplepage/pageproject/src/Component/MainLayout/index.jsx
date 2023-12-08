import React from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Foot from '../Layout/Footer'

function MainLayout() {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Foot></Foot>
    </div>
  )
}

export default MainLayout