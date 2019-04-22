import React from 'react'
import './product-cart.sass'

const ProductCart = ({device}) => {
    const{model, price, description, img} = device
    return(
        <div className = {"product-cart"}>
            <div className="product-cart-container wrap">
                <div className="img">
                    <img src={img} alt=""/>
                </div>
                <div className="content">
                    <div className="item model">{model}</div>
                    <div className="item price">Price: <span>{price}$</span></div>
                    <div className="item desc">{description}</div>
                    <div className="item button">Add To Cart</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart