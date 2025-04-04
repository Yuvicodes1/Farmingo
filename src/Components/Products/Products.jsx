import React from 'react';
import './Products.css';
import collections from '../Assets/collections';
import Item from '../Items/Item';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Products = () => {
  return (
    <div className='products'>
      <h1>Shop</h1>
      <hr />
      <div className="collections">
        {collections.map((items, i) => {
          return (
            <Item
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              new_price={items.new_price}
              old_price={items.old_price}
            />
          );
        })}
      </div>
      <div className="butt">
        {/* ✅ Link to /allproducts */}
        <Link to="/allproducts">
          <button>More Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
