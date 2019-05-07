import React from 'react';
import './header.sass'
import {Link} from "react-router-dom";
import logo from "./logo.jpg"
import {compose} from "redux";
import {withService} from "../../hoc/with-service";
import connect from "react-redux/es/connect/connect";
import LoginContainer from "../../../containers/login-container";
import RegistrationContainer from "../../../containers/registration-container";
import { openModal } from "../../../actions";

const Header = ({total, count, modals, profile, openModal}) => {
    const { login, registration } = modals;
    return(
        <React.Fragment>
            <div className="modals">
                {login? <LoginContainer /> : ""}
                {registration? <RegistrationContainer /> : ""}
            </div>
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
                <div className="header-profile">
                    {
                        profile?
                            <div className={"profile"}>
                                <div className="username">{profile.username}</div>
                                <div className="icon"><i className="far fa-user"></i></div>
                            </div>
                            :
                            <div className={"profile"} onClick={() => openModal("login")}>
                                <div className="username">Sign in</div>
                                <div className="icon"><i className="fas fa-sign-in-alt"></i></div>
                            </div>
                    }
                </div>
                <Link to={'/cart/'} className="header-cart">
                    <div className="sum">{total}$</div>
                    <div className = {'cart-box'}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">{count}</span>
                    </div>
                </Link>
            </header>
        </React.Fragment>
    )
}

const mapStateToProps = ({ cartList:{orderTotal, orderCount }, modals, profileList }) => {
    return {
        total: orderTotal,
        count: orderCount,
        modals: modals,
        profile: profileList.profile,
    }
}

const mapDispatchToProps = {
    openModal: openModal,
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header)