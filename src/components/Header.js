import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Header.css"
import logo from '../assets/img/logo.png'

class Header extends React.Component{
    render() {
        return (
            <header>
            <nav className="main-nav">
                    <NavLink to='/'><img src={logo} alt="Kasa" /></NavLink>
                <ul>
                    <NavLink to='/'> <li>
                        Accueil
                    </li></NavLink>
                    <NavLink to='/About'> <li>
                        A propos
                    </li></NavLink>
                </ul>
            </nav>
            </header>
        );
    }
}

export default Header