import React from "react";
import { Redirect } from "react-router-dom";
import "../styles/AccommodationPage.css";
import { data } from "../data"

import Gallery from "./Gallery";
import Tag from "./Tag";
import HostInfos from "./HostInfos";
import Rating from "./Rating";
import Dropdown from "./Dropdown";

class AccommodationPage extends React.Component {
    render() {
        const idParam = this.props.match.params.id;
        if (!data.some((elt) => elt.id === idParam)) return <Redirect to="/404" />;

        const currentLocation = data.filter((elt) => elt.id === idParam)[0];

        const {
            title,
            location,
            pictures,
            host,
            equipments,
            tags,
            rating,
            description,
        } = currentLocation;

        return (
            <div className="location-page">
                <header>
                    <Gallery images={pictures} />
                </header>

                <main className="main-location">
                    <header className="location-header">
                        <div>
                            <h2>{title}</h2>
                            <p>{location}</p>
                            {tags.map((tag, index) => (
                                <Tag key={index} content={tag} />
                            ))}
                        </div>
                        <div className="location-header-host">
                            <HostInfos name={host.name} img={host.picture} />
                            <Rating fill={rating} />
                        </div>
                    </header>

                    <section className="location-details">
                        <Dropdown title="Description" content={description} />
                        <Dropdown title="Equipements" content={equipments} />
                    </section>
                </main>
            </div>
        );
    }
}

export default AccommodationPage;