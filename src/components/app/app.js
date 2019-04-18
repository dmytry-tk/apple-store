import React from 'react';
import './app.sass'
import Header from "../header";
import SimpleSlider from "../slider";

const App = () => {
    return (
        <div className = "wrapper">
            <Header />
            <SimpleSlider />
        </div>
    )
}

export default App