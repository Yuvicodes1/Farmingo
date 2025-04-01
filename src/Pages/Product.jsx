import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Contexts/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Related from '../Components/RelatedProducts/Related';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  // Ensure the page moves to the top on product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]); // Triggers when the product ID changes

  return (
    <div className='product'>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Related />
    </div>
  );
};

export default Product;
