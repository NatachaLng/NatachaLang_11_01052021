import React from "react";
import img from "../assets/img/about-banner.jpg"
import "../styles/Banner.css";

class AboutBanner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-cover"></div>
                <img src={img} alt="banner homepage" />
            </div>
        );
    }
}


export default AboutBanner;