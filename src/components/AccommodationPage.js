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
            <div className="accommodation-page">
                    <Gallery images={pictures} />

                <main className="main-location">
                    <div className="accommodation-header">
                        <div>
                            <h2>{title}</h2>
                            <p>{location}</p>
                            {tags.map((tag, index) => (
                                <Tag key={index} content={tag} />
                            ))}
                        </div>
                        <div className="accommodation-header-host">
                            <HostInfos name={host.name} img={host.picture} />
                            <Rating fill={rating} />
                        </div>
                    </div>

                    <section className="accommodation-details">
                        <Dropdown title="Description" content={description} />
                        <Dropdown title="Equipements" content={equipments} />
                    </section>
                </main>
            </div>
        );
    }
}

export default AccommodationPage;