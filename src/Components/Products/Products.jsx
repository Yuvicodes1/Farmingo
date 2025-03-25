import React from 'react'
import './Products.css'
import collections from '../Assets/collections'
import Item from '../Items/Item'

const Products = () => {
  return (
    <div className='products'>
        <h1>
            Shop
        </h1>
        <hr/>
        <div className="collections">
            {collections.map((items,i)=>{
                return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })}
        </div>
        </div>
  )
}

export default Products