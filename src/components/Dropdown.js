import React from "react";
import up_arrow from '../assets/svg/chevron-up-solid.svg';
import down_arrow from '../assets/svg/chevron-down-solid.svg'
import '../styles/Dropdown.css'

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    callActiveCollapse() {
        if (this.state.active) {
            this.setState({active: false})
        }
        else {
            this.setState({active: true})
        }
    }

    render() {
        let data = this.props.scaleValue
        let content = data.content
        return (
            <>
                <div className="dropdown">
                    <div className="dropdown_top">
                        <p>{data.title}</p>
                        <img src={this.state.active ? up_arrow : down_arrow} alt="Arrow icon" className="arrow" onClick={() => (this.callActiveCollapse())}/>
                    </div>
                    <div className={this.state.active ? "dropdown_content" : "dropdown_content__active"}>
                        {typeof content === 'object' ? <ul>{content.map((content, index) =>(
                            <li key={`${index}_tag`}>{content}</li>
                        ))}</ul> : <p>{content}</p>}
                    </div>
                </div>
            </>
        )
    }
}

export default Dropdown;