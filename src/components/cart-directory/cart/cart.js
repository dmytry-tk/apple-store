import React from 'react'
import CartItem from "../cart-item";
import "./cart.sass"

const Cart = ({cartList = [], onIncrease, onDelete, onDecrease, total, clearCart}) => {
    const cartLength = cartList.length? true : false
    const table = (<div>
            <table border="1">
                <tbody>
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
                </tbody>
            </table>
            <div className = {"total"}>Total: {total}$</div>
            <div className="clearCart button" onClick={() => clearCart()}>Clear cart</div>
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