import React from "react";
import "../styles/Gallery.css";

class Gallery extends React.Component {  state = {
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
                    <span
                        className="fas fa-chevron-left"
                        onClick={() => this.goToPreviousImage()}
                    ></span>
                )}
                {images.length > 1 && (
                    <span
                        className="fas fa-chevron-right"
                        onClick={() => this.goToNextImage()}
                    ></span>
                )}
            </div>
        );
    }
}

export default Gallery