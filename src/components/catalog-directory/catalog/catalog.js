import React from 'react'
import './catalog.sass'
import CatalogItem from "../catalog-item";

const Catalog = ({ devices }) => {
    return(
        <div className = "catalog wrap">
            {
                devices.map((device, idx) => {
                    return (
                        <CatalogItem
                            key = {idx}
                            device = {device}/>
                    )
                })
            }
        </div>
    )
}

export default Catalog


