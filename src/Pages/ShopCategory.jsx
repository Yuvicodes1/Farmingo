import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Contexts/ShopContext'
import dropdown from '../Components/Assets/images/down.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="" /> 
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((items,i)=>{
          if (props.category===items.category){
            return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
          }
          else if(props.category==="allproducts"){
            return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory
