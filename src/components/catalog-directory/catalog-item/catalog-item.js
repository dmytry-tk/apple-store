import React from 'react'
import './catalog-item.sass'
import {withRouter} from "react-router-dom";

const CatalogItem = ({ device, history }) => {
    const { deviceClass, _id, model, price, img} = device;
    return (
        <div
            className={'catalog-item'}
            onClick={() => {
                const newPath = `/${deviceClass}/${_id}`;
                history.push(newPath)
            }}>
            <div className="catalog-content">
                <img src={img} alt="model"/>
                <div className="name">{model}</div>
                <div className="price">{price}$</div>
            </div>
        </div>
    )
}

export default withRouter(CatalogItem);
