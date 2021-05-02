import React from "react";
import Banner from "./Banner";
import '../styles/Banner.css';
import Card from "./Card";
import '../styles/Card.css';
import img from "../assets/img/homepage-banner.jpg"
import '../styles/Homepage.css';


class Homepage extends React.Component{
    render() {
        return (
            <div>
                <main>
                    <Banner
                        content="Chez vous, partout et ailleurs"
                        imgSrc={img}
                        imgAlt="Landscape"
                    />
                    <Card />
                </main>
            </div>
        )
    }
}

export default Homepage;