import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../styles/Header.css"
import logo from '../assets/img/logo.png'

class Header extends Component{
    render() {
        return (
            <nav className="main-nav">
                    <img src={logo} alt="Kasa" />
                <ul>
                    <a href='#'> <li>
                        Accueil
                    </li></a>
                    <a href='#'> <li>
                        A propos
                    </li></a>
                </ul>
            </nav>
        );
    }
}

export default Header