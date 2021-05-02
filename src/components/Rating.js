import React from "react";
import "../styles/Rating.css";
import full_star from '../assets/svg/red-star-solid.svg'
import light_star from '../assets/svg/light-star-solid.svg'

class Rating extends React.Component {
    render() {
        const { fill } = this.props;
        const starsClasses = [];

        for (let i = 0; i < 5; i++) {
            i < fill
                ? starsClasses.push({full_star})
                : starsClasses.push({light_star});
        }

        return (
            <div className="rate">
                {starsClasses.map((star, index) => (
                    <img key={index} src={star}></img>
                ))}
            </div>
        );
    }
}


export default Rating;