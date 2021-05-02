import React from "react";
import up_arrow from '../assets/svg/chevron-up-solid.svg';
import down_arrow from '../assets/svg/chevron-down-solid.svg'
import '../styles/Dropdown.css'

class Dropdown extends React.Component {
    state = {
        isOpen: false,
    };

    toggleList = () => {
        this.setState((prevState) => ({
            isOpen: prevState.isOpen ? false : true,
        }));
    };

    render() {
        const { title, content } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="dropdown">
                <h3 onClick={() => this.toggleList()}>
                    {title}
                    <span
                        className={isOpen ? {up_arrow} : {down_arrow} }
                    ></span>
                </h3>

                {Array.isArray(content) ? (
                    <ul
                        className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}
                    >
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}>
                        {content}
                    </p>
                )}
            </div>
        );
    }
}

export default Dropdown;