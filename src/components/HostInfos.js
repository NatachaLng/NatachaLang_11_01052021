import React from "react";
import "../styles/HostInfos.css"

class HostInfos extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.name
        this.img = this.props.img
        this.firstname = this.name.split(" ")[0];
        this.lastname = this.name.split(" ")[1]
    }

    render() {
        return (
            <div className="host">
                <p>
                    <span>{this.firstname ? this.firstname : ""}</span>
                    <span>{this.lastname ? this.lastname : ""}</span>
                </p>
                <img src={this.img} alt={this.name}/>
            </div>
        )
    }
}

export default HostInfos