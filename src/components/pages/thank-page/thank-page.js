import React from 'react'
import "./thank-page.sass"
import {Link} from "react-router-dom";
import apple from "./apple.jpg";

const ThankPage = ({children}) => {
    return(
        <div className={"thank-page"}>
            <div className="content">
                <div className="content-icon"><i className="far fa-check-circle"></i></div>
                <div className="content-text">{children}</div>
                <div className="content-buttons">
                    <Link to={'/'}><div className="button">Home Page</div></Link>
                    <Link to={'order-history'}><div className="button">Order History</div></Link>
                </div>
            </div>
        </div>
    )
};

ThankPage.defaultProps  = {
    children: "Your order is accepted, the manager will contact you shortly"
};
export default ThankPage