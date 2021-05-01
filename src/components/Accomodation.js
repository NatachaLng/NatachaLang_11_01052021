import React from "react";
import Header from "./Header";
import '../styles/Header.css';
import Footer from "./Footer";
import '../styles/Footer.css';


class Accomodation extends React.Component{
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Accomodation;