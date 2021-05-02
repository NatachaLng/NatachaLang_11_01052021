import React from "react";
import "../styles/Gallery.css";
import left_arrow from '../assets/svg/chevron-left-solid.svg';
import right_arrow from '../assets/svg/chevron-right-solid.svg'

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
                <img class='gallery_image' src={images[currentPicture]} alt={`location`} />

                {images.length > 1 && (
                    <img
                        className='left-arrow arrow'
                        src={left_arrow}
                        onClick={() => this.goToPreviousImage()}
                    ></img>
                )}
                {images.length > 1 && (
                    <img
                        className='right-arrow arrow'
                        src={right_arrow}
                        onClick={() => this.goToNextImage()}
                    ></img>
                )}
            </div>
        );
    }
}

export default Gallery