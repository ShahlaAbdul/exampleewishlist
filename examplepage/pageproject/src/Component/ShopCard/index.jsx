import React, { useContext }   from 'react'
import './style.scss'
import  { BasketContect } from '../../useContext/BasketContext'
import { Wishlistcontext } from '../../useContext/WishlistContext'

function Card({id,title,price,description,category,image}) {
    const { addBasket} = useContext(BasketContect)
    const {addWishlistt}= useContext(Wishlistcontext)

  return (
    <div>
        <div className='card'>
            <ul key={id}>
                <div className='img'>
                    <img src={image} alt="" />
                </div>
                <p>
                    <span>name:</span>
                    {title}
                </p>
                <p>
                    <span>price:</span>
                    {price}
                </p>
                <p>
                    <span>Description:</span>
                    {description}
                </p>
                <p>
                    <span>category: </span>
                    {category}
                </p>
                <p>
                    <button className='btn'  onClick={(x)=>{addBasket({id,title,price,description,category,image})}}> add basket</button>
                    <button className='btn' onClick={(x)=>{addWishlistt({id,title,price,description,category,image})}}> add wishlist</button>
                </p>

            </ul>
      

        </div>
    </div>
  )
}

export default Card