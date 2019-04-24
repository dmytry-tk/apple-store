import React from 'react';
import './footer.sass'
import logo from "./apple-logo.png"

const Footer = () => {
    return(
        <footer className = "footer">
            <div className="footer-container">
                <div className="item logo"><img src={logo} alt=""/></div>

            </div>
        </footer>
    )
}

export default Footer