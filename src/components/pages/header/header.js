import React from 'react';
import './header.sass'
import {Link} from "react-router-dom";
import logo from "./apple-logo.png"
import {compose} from "redux";
import {withService} from "../../hoc/with-service";
import connect from "react-redux/es/connect/connect";

const Header = ({total, count}) => {
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
                <div className="sum">{total}$</div>
                <div className = {'cart-box'}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{count}</span>
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({ cartList:{orderTotal, orderCount } }) => {
    return {
        total:orderTotal,
        count: orderCount
    }
}

const mapDispatchToProps = {
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header)