import React from "react";
import {about} from "../data";
import Header from "./Header";
import '../styles/Header.css';
import Footer from "./Footer";
import '../styles/Footer.css';
import AboutBanner from "./AboutBanner.css";

class AboutPage extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <Header />
                    <AboutBanner />
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

export default AboutPage;