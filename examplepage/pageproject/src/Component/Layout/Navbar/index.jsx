import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="navbarContainer">
            <div className="navbarImg">
                <img src="	https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" />
            </div>
            <div className='pages'>
                <ul className='navbarMain'>
                    {/* <li ><NavLink to="/" activeClassname="active"/> Home </li>
                    <li><NavLink to="/shop" activeClassname="active"> Shop </NavLink></li>
                    <li ><NavLink to="/" activeClassname="active"/> Blog </li>
                    <li ><NavLink to="/" activeClassname="active"/> Page </li> */}
                    {/* <a href="/shop">rgtrhy6ty</a>s */}
                    <li><NavLink to={"/"} className={"non-active"} >Home</NavLink></li>
                    <li><NavLink to={"/basket"}  className={"non-active"} >Shop</NavLink></li>
                    <li><NavLink to={"/wishlist"}  className={"non-active"} >Wishlist</NavLink></li>
                    <li><NavLink to={"/"}  className={"non-active"} >Page</NavLink></li>
                  
                </ul>
            </div>

            <div className="navbaricons">
                <div className='search'><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className="shop"><i className="fa-solid fa-cart-shopping"></i></div>
                <div className="wishlist"><i className="fa-regular fa-heart"></i></div>
            </div>
        </div>

    </div>
  )
}

export default Navbar