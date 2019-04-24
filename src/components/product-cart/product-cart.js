import React from 'react'
import './product-cart.sass'

const ProductCart = ({device, addDeviceToCart, addedToCart}) => {
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
                    {
                        addedToCart?
                            <div className="item added button">Added to cart <i className="fas fa-check"></i></div>
                            :
                            <div className="item button" onClick={() => addDeviceToCart()}>Add To Cart</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCart