import React from "react";
import Header from "./Header";
import '../styles/Header.css';
import Footer from "./Footer";
import '../styles/Footer.css';
import '../styles/ErrorPage.css';

class ErrorPage extends React.Component{
    render() {
        return(
            <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="error_page">
                    <div className="error">
                        404
                    </div>
                    <div className="error_message">
                        Oups! La page que vous demandez n'existe pas.
                    </div>
                    <div className="redirection">
                        <a href='#'>Retouner à la page d'accueil</a>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
        )
    }
}

export default ErrorPage;