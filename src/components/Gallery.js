import React from "react";
import "../css/Gallery.css";
import arrow_left from "../assets/svg/chevron-left-solid.svg"
import arrow_right from "../assets/svg/chevron-right-solid.svg"

class Gallery extends React.Component {
    state = {
        currentPicture: 0,
    };

    goToPreviousImage = () => {
        this.setState((prevState) => ({
            currentPicture:
                prevState.currentPicture === 0
                    ? this.props.images.length - 1
                    : prevState.currentPicture - 1,
        }));
    };

    goToNextImage = () => {
        this.setState((prevState) => ({
            currentPicture:
                prevState.currentPicture === this.props.images.length - 1
                    ? 0
                    : prevState.currentPicture + 1,
        }));
    };

    render() {
        const { images } = this.props;
        const { currentPicture } = this.state;

        return (
            <div className="gallery">
                <img src={images[currentPicture]} alt={`location`} />

                {images.length > 1 && (
                    <img
                        src={arrow_left}
                        className='arrow arrow-left'
                        onClick={() => this.goToPreviousImage()}
                    ></img>
                )}
                {images.length > 1 && (
                    <img
                        src={arrow_right}
                        className='arrow arrow-right'
                        onClick={() => this.goToNextImage()}
                    ></img>
                )}
            </div>
        );
    }
}