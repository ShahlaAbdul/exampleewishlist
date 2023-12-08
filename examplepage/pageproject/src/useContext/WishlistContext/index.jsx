import React, { createContext, useState } from 'react'

export const Wishlistcontext=createContext()

function WishlistProvider({children}) {

  const [addWishlist, setAddWishlist] = useState([])

  function addWishlistt(item) {
    const index=addWishlist.findIndex((x)=>x.id===item.id)
    if (index=== -1) {
      setAddWishlist([...addWishlist,{...item}])

      
    }
    setAddWishlist(addWishlist.filter((x)=>x.id !==item.id))
    
  }
  const newdata={addWishlist, addWishlistt}

  return (
    <Wishlistcontext.Provider value={newdata}>
      {children}
    </Wishlistcontext.Provider>
  )
}

export default WishlistProvider