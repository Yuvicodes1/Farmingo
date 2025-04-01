import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Related.css';
import data_product from '../Assets/images/data';
import Item from '../Items/Item';

const Related = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedProducts = useMemo(() => {
    const shuffledProducts = [...data_product].sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, 3);
  }, []);

  return (
    <div className='related'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-item">
        {selectedProducts.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="related-link">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Related;
