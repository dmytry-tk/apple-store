import React from 'react'
import "./cart-item.sass"

const CartItem = ({item, ind, onIncrease, onDelete, onDecrease }) => {
    const {_id, model, img, description, count, price } = item;

    return(
        <tr>
            <td>{ind+1}</td>
            <td>{model}</td>
            <td><img src={img} alt=""/></td>
            <td>{description}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td className = "actions-td">
                <span onClick={() => onDecrease(_id)} className = {"decrement action"}><i className="far fa-minus-square"></i></span>
                <span onClick={() => onDelete(_id)} className = {"delete action"}><i className="far fa-trash-alt"></i></span>
                <span onClick={() => onIncrease(_id)} className = {"increment action"}><i className="far fa-plus-square"></i></span>
            </td>
        </tr>
    )
}

export default CartItem