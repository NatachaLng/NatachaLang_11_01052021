import React from 'react';
import {NavLink} from "react-router-dom";
import {data} from '../data'
import '../styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div id="cards-parent">
                {data.map(hotel => (
                        <div className="hotel-card" key={hotel.id}>
                            <img className="hotel-card-img" src={hotel.cover} alt={hotel.title}/>
                            <h2 className="hotel-card-title">{hotel.title}</h2>
                        </div>
                ))}
            </div>
        )
    }
}

export default Card;