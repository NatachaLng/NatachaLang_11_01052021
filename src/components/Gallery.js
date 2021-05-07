import React from "react";
import "../styles/Gallery.css";
import left_arrow from '../assets/svg/chevron-left-solid.svg';
import right_arrow from '../assets/svg/chevron-right-solid.svg'


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPicture: 0,
        };
    }

    handlePreviousClick = () => {
        this.setState((prevState) => ({
            currentPicture: prevState.currentPicture === 0 ? this.props.images.length - 1 : prevState.currentPicture - 1,
        }));
    };
    handleNextClick = () => {
        this.setState((prevState) => ({
            currentPicture: prevState.currentPicture === this.props.images.length - 1 ? 0 : prevState.currentPicture + 1,
        }));
    };
    render() {
        return (
            <div className="gallery">
                <img className="gallery_image" src={this.props.images[this.state.currentPicture]} alt="location" />
                {this.props.images.length > 1 && (
                    <>
                        <img className="left-arrow arrow" src={left_arrow} onClick={this.handlePreviousClick} alt="Previous" />
                        <img className="right-arrow arrow" src={right_arrow} onClick={this.handleNextClick} alt="Next" />
                    </>
                )}
            </div>
        );
    }
}

export default Gallery