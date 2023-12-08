import React, { useContext } from 'react'
import Navbar from '../../Component/Layout/Navbar'
import { BasketContect } from '../../useContext/BasketContext';
import Card from '../../Component/ShopCard';

function Shop() {
    const  {basket,increaseCount,decreaseCount ,removeItem } = useContext(BasketContect);
  return (
    <div>
        <Navbar></Navbar>
        
        <div className='newcard'>
        {basket.length ? (
        <div className="container">
          {basket.map((x) => (
            <div className="newcard" key={x.id}>
              <Card {...x}></Card>
              <button onClick={() => {increaseCount(x)}}>
                +
              </button>
              <div className="price">{x.count}</div>
              <button onClick={() => {decreaseCount(x)}}>
                -
              </button>
              <button onClick={()=>removeItem(x)}>X</button>
            </div>
          ))}
        </div>
      ) : 
      (
        <h1>Basket bosdur</h1>
      )}
        </div>
    </div>
  )
}

export default Shop