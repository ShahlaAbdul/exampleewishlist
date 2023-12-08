import React, { createContext, useState } from 'react'

export const BasketContect = createContext()

function BasketProvider({ children }) {

   const [basket, setBasket] = useState([])

   function addBasket(item) {
      const index = basket.findIndex((x) => x.id === item.id);
      if (index === -1) {
         setBasket([...basket, { ...item, count: 1 }])
         return
      }
      basket[index].count++
      setBasket([...basket])
   }
   console.log(basket);

   function increaseCount(item) {
      const index = basket.findIndex((x) => x.id === item.id)
      basket[index].count++
      setBasket([...basket])
   }
   function decreaseCount(item) {
      const index = basket.findIndex((x) => x.id === item.id)
      if (basket[index].count === 1) {
         return
      }
      basket[index].count--
      setBasket([...basket])
   }
   function removeItem(item) {
      setBasket(basket.filter((x) => x.id !== item.id))
   }

   const data = {
      basket, increaseCount, decreaseCount, removeItem,
      addBasket
   }
   return (
      <BasketContect.Provider value={data}>
         {children}
      </BasketContect.Provider>
   )
}

export default BasketProvider