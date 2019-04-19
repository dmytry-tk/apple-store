import React from 'react';
import './app.sass'
import { Route, Switch } from 'react-router-dom'
import Header from "../pages/header";
import { HomePage, CatalogPage } from "../pages";
import Footer from "../pages/footer";

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
                    component={CatalogPage}
                    exact />
            </Switch>
            {/*<Footer />*/}
        </div>
    )
}

export default App