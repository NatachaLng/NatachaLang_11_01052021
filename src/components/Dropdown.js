import React from "react";
import '../styles/Dropdown.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

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
        const {title, content} = this.props;
        const {isOpen} = this.state;

        return (
            <div className="dropdown">
                <h3 onClick={() => this.toggleList()}>
                    {title}
                    {isOpen ? <FontAwesomeIcon icon={faChevronUp} className='arrow_dropdown'/> :
                        <FontAwesomeIcon icon={faChevronDown} className='arrow_dropdown'/>}
                </h3>


                {Array.isArray(content) ? (
                    <ul
                        className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}
                    >
                        {content.map((item, index) => (
                            <li key={index} className="dropdown-li">{item}</li>
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