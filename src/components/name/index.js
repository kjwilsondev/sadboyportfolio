import React, { Component } from "react";
import "./styles.css";

class Name extends Component {
  render() {
    console.log("instantiated Name render");
    const { title } = this.props;

    return (
      <div className="name">
        <p>{title}</p>
      </div>
    );
  }
}

export default Name;
