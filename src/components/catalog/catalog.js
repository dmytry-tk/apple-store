import React, { Component } from 'react'
import './catalog.sass'
import CatalogItem from "../catalog-item";
import './catalog.sass'

const Catalog = ({ phones }) => {
    return(
        <div className = "catalog wrap">
            {
                phones.map((phone) => {
                    return (
                        <CatalogItem
                            phone = {phone}/>
                    )
                })
            }
        </div>
    )
}

export default Catalog


