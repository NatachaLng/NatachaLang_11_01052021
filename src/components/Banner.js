import React, { Component } from "react";
import img from "../assets/img/homepage-banner.jpg"
import "../styles/Banner.css";

class Banner extends Component {
    render() {
        const { content, imgSrc, imgAlt } = this.props;

        return (
            <div className="banner">
                <div className="banner-cover"></div>
                <img src={img} alt="banner homepage" />
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
        );
    }
}


export default Banner;