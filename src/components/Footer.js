import React from "react";
import logo from '../assets/img/logo-white.png'
import "../styles/Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <img src={logo} alt="Kasa"/>
                <p>
                    <span className="far fa-copyright"></span> 2020 Kasa. All rights
                    reserved
                </p>
            </footer>
        );
    }
}

export default Footer;