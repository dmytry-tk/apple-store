import React, {Component} from 'react'
import CartItem from "../cart-item";
import "./cart.sass"

const Cart = ({cartList = [], onIncrease, onDelete, onDecrease}) => {
    const cartLength = cartList.length? true : false
    const table = (<div>
            <table border="1">
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {
                    cartList.map((item, ind) => {
                        return <CartItem
                            item={item}
                            ind={ind}
                            onIncrease={onIncrease}
                            onDelete={onDelete}
                            onDecrease={onDecrease}/>
                    })
                }
            </table>
            <div className = {"total"}>Total: 2000$</div>
        </div>)

    const noItems = (<div>There are no items in your cart yet.</div>)
    return (
        <div className = "cart">
            <div className = "wrap">
                <div className="cart-container">
                    {
                        cartLength? table : noItems
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart