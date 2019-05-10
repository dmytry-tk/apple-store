import React from 'react'
import {Link} from "react-router-dom";
import "./assortment.sass"

const Assortment = () => {
    return(
        <div className={"assortment-section"}>
            <div className="wrap">
                <div className="assortment">
                    <Link to={"/iphone/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-iphone-010.3fb.png" alt=""/>
                            <div className="title">iPhone</div>
                        </div>
                    </Link>
                    <Link to={"/mac/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-mcbook-0100.3fb.png" alt=""/>
                            <div className="title">MacBook</div>
                        </div>
                    </Link>
                    <Link to={"/apple-watch/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-watch-01.3fb.png" alt=""/>
                            <div className="title">AppleWatch</div>
                        </div>
                    </Link>
                    <Link to={"/ipad/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-ipad-010.3fb.png" alt=""/>
                            <div className="title">iPad</div>
                        </div>
                    </Link>
                    <Link to={"/imac/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-imac-01.3fb.png" alt=""/>
                            <div className="title">iMac</div>
                        </div>
                    </Link>
                    <Link to={"/accessories/"} className="link">
                        <div className="item">
                            <img src="https://avic.ua/assets/cache/images/icons-site/260x300-apple-acessories-0100.3fb.png" alt=""/>
                            <div className="title">Accessories</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Assortment
