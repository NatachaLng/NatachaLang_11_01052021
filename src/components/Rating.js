import React from "react";
import "../styles/Rating.css";

class Rating extends React.Component {
    render() {
        const { fill } = this.props;
        const starsClasses = [];

        for (let i = 0; i < 5; i++) {
            i < fill
                ? starsClasses.push("fas fa-star fill")
                : starsClasses.push("fas fa-star");
        }

        return (
            <div className="rate">
                {starsClasses.map((star, index) => (
                    <span key={index} className={star}></span>
                ))}
            </div>
        );
    }
}


export default Rating;