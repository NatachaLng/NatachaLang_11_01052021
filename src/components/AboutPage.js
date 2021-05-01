import React from "react";
import {about} from "../data";
import Header from "./Header";
import '../styles/Header.css';
import Footer from "./Footer";
import '../styles/Footer.css';
import AboutBanner from "./AboutBanner.css";
import Dropdown from "./Dropdown";

class AboutPage extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <Header />
                    <AboutBanner />
                </header>
                <main>
                    {about.map((about, index) =>(
                        <Dropdown key={`${index}_collapse`} scaleValue={about}/>
                    ))}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default AboutPage;