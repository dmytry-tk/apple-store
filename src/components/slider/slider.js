import slide1 from "./1.jpg"
import slide2 from "./2.jpg"
import slide3 from "./3.jpg"
import slide4 from "./4.jpg"
import slide5 from "./5.jpg"
import slide6 from "./6.jpg"
import React, { Component } from "react";
import Slider from "react-slick";
import './slider.sass'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 700,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 2000,
        };
        return (
            <div className={"slider-container"}>
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-item" style={{backgroundImage: `url(${ slide1 })`}}></div>
                    </div>
                    <div className="slide">
                        <div className="slide-item" style={{backgroundImage: `url(${ slide5 })`}}></div>
                    </div>
                    <div className="slide">
                        <div className="slide-item" style={{backgroundImage: `url(${ slide6 })`}}></div>
                    </div>
                </Slider>
            </div>
        );
    }
}

