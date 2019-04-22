import React from 'react';
import './app.sass'
import { Route, Switch } from 'react-router-dom'
import Header from "../pages/header";
import { HomePage, CatalogPage } from "../pages";
import Footer from "../pages/footer";
import {CatalogIpads, CatalogIphones} from "../sw-components/device-catalog";
import ProductCart from "../product-cart/product-cart";

const App = () => {
    return (
        <div className = "wrapper">
            <Header />
            <Switch>
                <Route
                    path={"/"}
                    component={HomePage}
                    exact />
                <Route
                    path={"/iphone/"}
                    component={CatalogIphones}
                    exact />
                <Route
                    path={"/ipad/"}
                    component={CatalogIpads}
                    exact />
                <Route
                    path={"/mac/"}
                    component={<ProductCart class = {"iphone"} id = {"101"}/>}
                    exact />
            </Switch>
            {/*<Footer />*/}
        </div>
    )
}

export default App