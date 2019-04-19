import React from 'react';
import './header.sass'
import {Link} from "react-router-dom";
import logo from "./apple-logo.png"

const Header = () => {
    return(
        <header className={'header'}>
            <div className="header-logo">
                <Link to={"/"}>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="header-menu">
                <ul>
                    <li><Link to="/iphone/">IPhone</Link></li>
                    <li><Link to="/ipad/">IPad</Link></li>
                    <li><Link to="/imac/">IMac</Link></li>
                    <li><Link to="/mac/">Mac</Link></li>
                    <li><Link to="/apple-watch/">Apple watch</Link></li>
                </ul>
            </div>
            <Link to={'/cart/'} className="header-cart">
                <div className="sum">0$</div>
                <div className = {'cart-box'}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </div>
            </Link>
        </header>
    )
}

export default Header