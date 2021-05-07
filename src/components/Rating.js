import React from "react";
import "../styles/Rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'


class Rating extends React.Component {
    constructor(props) {
        super(props);

		this.starsClasses = Array(5)
            .fill()
            .map((_, i) => (i < this.props.fill ? 'fas fa-star fill' : 'fas fa-star empty'));
    }

    render() {
        return (
            <div className="rate">
                {this.starsClasses.map((star, i) => (
                    <FontAwesomeIcon icon={faStar} className={star} key={i} />
                ))}
            </div>
        );
    }
}

export default Rating;