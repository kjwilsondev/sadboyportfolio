import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="navbar">
        <li></li>
        <li>
          <FontAwesomeIcon
            className="icon"
            icon={faSadTear}
            size="3x"
            // onClick={() => history.push("/")}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="icon"
            icon={faBars}
            size="2x"
            // onClick={() => history.push("/")}
          />
        </li>
      </ul>
    );
  }
}

export default Navbar;
