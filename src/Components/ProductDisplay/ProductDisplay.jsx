import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/images/star_icon.png"
import star_dull from '../Assets/images/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} =props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-image">
                <img src={product.image} alt="" className='productdisplay-main-img'/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>({product.ratings})</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-priceold">
                &#x20B9;{product.old_price}
                </div>
                
                <div className="productdisplay-right-pricenew">
                &#x20B9;{product.new_price}
                </div>

            </div>
            <div className="product-display-right-description">
                {product.description}
            </div>
            <button>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay