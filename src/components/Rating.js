import React from "react";
import "../styles/Rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'


class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.fill = this.props.fill;
        this.starsClasses = [];
    }

    componentDidMount() {
        this.rating()
    }

    rating() {
        for (let i = 0; i < 5; i++) {
            i < this.fill
                ? this.starsClasses.push('fas fa-star fill')
                : this.starsClasses.push('fas fa-star empty');
        }
    }

    render() {
        return (
            <div className="rate">
                {this.starsClasses.map((star) => (
                    <FontAwesomeIcon icon={faStar} className={star}/>
                ))}
            </div>
        );
    }
}


export default Rating;