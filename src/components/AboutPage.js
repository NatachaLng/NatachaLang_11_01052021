import React from "react";
import {about} from "../data";
import Dropdown from "./Dropdown";
import Banner from "./Banner";

class AboutPage extends React.Component{
    render(){
        return (
            <div>
                <main>
                    <Banner
                        content=""
                        imgSrc="../assets/img/about-banner.jpg"
                        imgAlt="Landscape"
                    />
                    {about.map((about, index) =>(
                        <Dropdown key={`${index}_collapse`} scaleValue={about}/>
                    ))}
                </main>
            </div>
        )
    }
}

export default AboutPage;