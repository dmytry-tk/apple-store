import React from 'react';
import './app.sass'
import { Route, Switch } from 'react-router-dom'
import Header from "../pages/header";
import { CartPage } from "../pages";
import {CatalogIpads, CatalogIphones} from "../sw-components/device-catalog";
import ProductCartContainer from "../../containers/product-cart-container";
import HomePage from "../home-pade-directory/home-page";

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
                    path={"/:class/:id"}
                    render={({match, location, history}) => {
                        return <ProductCartContainer deviceClass = {match.params.class} deviceId = {match.params.id}/>
                    }}
                    exact/>
                <Route
                    path={"/cart"}
                    component={CartPage}
                    exact/>
            </Switch>
            {/*<Footer />*/}
        </div>
    )
}

export default App