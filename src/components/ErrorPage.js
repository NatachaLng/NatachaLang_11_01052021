import React from "react";
import '../styles/ErrorPage.css';
import {BrowserRouter, NavLink} from "react-router-dom";

class ErrorPage extends React.Component{
    render() {
        return(
            <div>
            <main>
                <div className="error_page">
                    <div className="error">
                        404
                    </div>
                    <div className="error_message">
                        Oups! La page que vous demandez n'existe pas.
                    </div>
                    <BrowserRouter>
                    <div className="redirection">
                        <NavLink to='/'>Retouner à la page d'accueil</NavLink>
                    </div>
                    </BrowserRouter>
                </div>
            </main>
            </div>
        )
    }
}

export default ErrorPage;