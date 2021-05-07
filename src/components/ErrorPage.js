import React from "react";
import '../styles/ErrorPage.css';
import {NavLink} from "react-router-dom";

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <div className="error_page">
                        <div className="error">
                            404
                        </div>
                        <div className="error_message">
                            Oups! La page que vous demandez n'existe pas.
                        </div>
                        <div className="redirection">
                            <NavLink to='/'>Retouner à la page d'accueil</NavLink>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default ErrorPage;