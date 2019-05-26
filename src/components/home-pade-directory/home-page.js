import React from 'react'
import Assortment from "./assortment";
import MainSlider from "./main-slider";
import HotSalesContainer from "../../containers/hot-sales-container";

const HomePage = () => {
    return(
    <div>
        <MainSlider />
        <Assortment />
        <HotSalesContainer />
    </div>
    )
};

export default HomePage