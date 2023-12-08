import React, { useEffect, useState } from 'react'
import Card from '../ShopCard';
import './style.scss'

function Inspiredproducts() {

    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setFetchData(data))
    }, [])


    
  return (
    <div>
        <div className='inspiredProducts'>
            <ul  className='product'>
                {fetchData.map((x)=>(

                    <Card key={x.id} id={x.id}
                    image={x.image} 
                    title={x.title.slice(0,10)} 
                    price={x.price} 
                    description={x.description.slice(0,40)}
                    category={x.category}
                
                    />
                
                ))
                }
            </ul>
            
        </div>


    </div>
  )
}

export default Inspiredproducts