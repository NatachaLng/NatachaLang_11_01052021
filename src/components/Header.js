import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import "../styles/Header.css"
import logo from '../assets/img/logo.png'

class Header extends React.Component{
    render() {
        return (
            <nav className="main-nav">
                    <img src={logo} alt="Kasa" />
                <ul>
                    <BrowserRouter>
                    <NavLink to='/'> <li>
                        Accueil
                    </li></NavLink>
                    <NavLink to='/About'> <li>
                        A propos
                    </li></NavLink>
                    </BrowserRouter>
                </ul>
            </nav>
        );
    }
}

export default Header