import React from "react";
import {about} from "../data";
import Dropdown from "./Dropdown";
import Banner from "./Banner";
import '../styles/AboutPage.css'
import img from '../assets/img/about-banner.jpg'

class AboutPage extends React.Component{
    render(){
        return (
            <div>
                <main>
                    <Banner
                        content=""
                        imgSrc={img}
                        imgAlt="Landscape"
                    />
                    <div className="dropdown-container">
                    {about.map((elt) => (
                        <Dropdown key={elt.id} title={elt.title} content={elt.content} />
                    ))}
                    </div>
                </main>
            </div>
        )
    }
}

export default AboutPage;