import React from "react";
import "../styles/Tag.css";

class Tag extends React.Component {
    render() {
        const { content } = this.props;

        return <div className="tag">{content}</div>;
    }
}

export default Tag;