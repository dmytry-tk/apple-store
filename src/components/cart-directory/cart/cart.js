import React from 'react'
import CartItem from "../cart-item";
import "./cart.sass"

const Cart = ({cartList:{cartItems, total}, onIncrease, onDelete, onDecrease, clearCart, makeOrder}) => {
    console.log(cartItems)
    const cartLength = cartItems.length? true : false
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
                        cartItems.map((item, ind) => {
                            return <CartItem
                                item={item}
                                key={ind}
                                ind={ind}
                                onIncrease={onIncrease}
                                onDelete={onDelete}
                                onDecrease={onDecrease}/>
                        })
                    }
                </tbody>
            </table>
            <div className = {"total"}>Total: {total}$</div>
            <div className="button-container">
                <div className="clearCart button" onClick={() => clearCart()}>Clear cart</div>
                <div className="makeOrder button" onClick={() => makeOrder()}>Make order</div>
            </div>
        </div>);

    const noItems = (<div>There are no items in your cart yet.</div>);
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
};

export default Cart