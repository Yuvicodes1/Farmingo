import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`} state={{ product: props }}>
            <img src={props.image} alt={props.name} />
        </Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">&#x20B9;{props.new_price}</div>
            <div className="item-old-price">&#x20B9;{props.old_price}</div>
        </div>
    </div>
  );
};

export default Item;
