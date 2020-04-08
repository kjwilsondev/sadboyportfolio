import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "",
    };
  }

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
          <li>
            <div
              className={`menu-btn ${this.state.open}`}
              onClick={() => {
                if (this.state.open === "") {
                  this.setState({ open: "open" });
                } else {
                  this.setState({ open: "" });
                }
              }}
            >
              <div class="menu-btn__burger"></div>
            </div>
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
      </div>
    );
  }
}

export default Navbar;
