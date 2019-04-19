import React from 'react'
import './catalog-item.sass'

const CatalogItem = ({ phone }) => {
    const {id, model, price, img} = phone
    return (
        <div key = {id} id={id} className={'catalog-item'}>
            {/*<img src={img} alt="model"/>*/}
            <div className="name">{model}</div>
            <div className="price">{price}</div>
        </div>
    )
}

export default CatalogItem
