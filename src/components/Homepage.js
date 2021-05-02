import React from "react";
import Banner from "./Banner";
import '../styles/Banner.css';
import Card from "./Card";
import '../styles/Card.css';


class Homepage extends React.Component{
    render() {
        return (
            <div>
                <main>
                    <Banner
                        content="Chez vous, partout et ailleurs"
                        imgSrc="../assets/img/homepage-banner.jpg"
                        imgAlt="Landscape"
                    />
                    <Card />
                </main>
            </div>
        )
    }
}

export default Homepage;