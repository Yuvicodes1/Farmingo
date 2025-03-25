import React from 'react'
import './Popular.css'
import fresh from '../Assets/freshies'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Fresh Combos !!</h1>
        <hr />
        <div className="popular-items">
            {fresh.map((items,i)=>{
                return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular