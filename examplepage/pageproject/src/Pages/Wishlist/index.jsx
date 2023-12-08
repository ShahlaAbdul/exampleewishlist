import React, { useContext } from 'react'
import Card from '../../Component/ShopCard'
import { Wishlistcontext } from '../../useContext/WishlistContext';

function Wishlist() {
    const  {addWishlist, addWishlistt} = useContext(Wishlistcontext);
  return (
    <div>

        <div className="wishlist">
        {addWishlist.map((x) => (
            <div className="newcard" key={x.id}>
              <Card {...x}></Card>
              <div className="price">{x.count}</div>
              <button onClick={() => {addWishlistt(x)}}>
                -
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Wishlist