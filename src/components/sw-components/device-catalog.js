import React from 'react'
import CatalogContainer from "../../containers";

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