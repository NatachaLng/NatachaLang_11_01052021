import React from "react";
import img from "../assets/img/homepage-banner.jpg"
import "../styles/Banner.css";

class Banner extends React.Component {
    render() {
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