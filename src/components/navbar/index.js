import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            // onClick={() => history.push("/")}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faSadTear}
            size="3x"
            // onClick={() => history.push("/")}
          />
        </li>
        <li></li>
      </ul>
    );
  }
}

export default Navbar;
