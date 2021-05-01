import React from "react";
import Header from "./Header";
import '../styles/Header.css';
import Banner from "./Banner";
import '../styles/Banner.css';
import Card from "./Card";
import '../styles/Card.css';
import Footer from "./Footer";
import '../styles/Footer.css';

class Homepage extends React.Component{
    render() {
        return (
            <div>
                <header>
                    <Header />
                    <Banner />
                </header>
                <main>
                    <Card />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Homepage;