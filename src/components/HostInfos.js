import React from "react";


class HostInfos extends React.Component{

    render(){
        const { name, img } = this.props;
        const firstname = name.split(" ")[0];
        const lastname = name.split(" ")[1]

        return(
            <div className="host">
                <p>
                    <span>{firstname ? firstname : ""}</span>
                    <span>{lastname ? lastname : ""}</span>
                </p>
                <img src={img} alt={name} />
            </div>
        )
    }
}

export default HostInfos