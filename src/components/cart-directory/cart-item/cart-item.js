import React from 'react'
import "./cart-item.sass"

const CartItem = ({item, ind, onIncrease, onDelete, onDecrease }) => {
    const {deviceId:id} = item

    return(
        <tr>
            <td>{ind+1}</td>
            <td>{item.model}</td>
            <td><img src={item.img} alt=""/></td>
            <td>{item.description}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td className = "actions-td">
                <span onClick={() => onDecrease(id)} className = {"decrement action"}><i className="far fa-minus-square"></i></span>
                <span onClick={() => onDelete(id)} className = {"delete action"}><i className="far fa-trash-alt"></i></span>
                <span onClick={() => onIncrease(id)} className = {"increment action"}><i className="far fa-plus-square"></i></span>
            </td>
        </tr>
    )
}

export default CartItem