import React from "react";
import "../styles/Rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'



class Rating extends React.Component {
    render() {
        const { fill } = this.props;
        const starsClasses = [];

        for (let i = 0; i < 5; i++) {
            i < fill
                ? starsClasses.push('fas fa-star fill')
                : starsClasses.push('fas fa-star empty');
        }

        return (
            <div className="rate">
                {starsClasses.map((star, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className={star} />
                ))}
            </div>
        );
    }
}


export default Rating;