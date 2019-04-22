import React from 'react'
import CatalogContainer from "../../containers/catalog-container";

export const CatalogIphones = () => {
    return (
        <CatalogContainer getDevice = "getIphones"/>
    )
}

export const CatalogIpads = () => {
    return (
        <CatalogContainer getDevice="getIpads"/>
    )
}