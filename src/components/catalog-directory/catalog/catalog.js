import React, { Component } from 'react'
import './catalog.sass'
import CatalogItem from "../catalog-item";
import './catalog.sass'

const Catalog = ({ devices }) => {
    return(
        <div className = "catalog wrap">
            {
                devices.map((device) => {
                    return (
                        <CatalogItem
                            device = {device}/>
                    )
                })
            }
        </div>
    )
}

export default Catalog


