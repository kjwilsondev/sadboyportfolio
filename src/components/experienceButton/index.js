import React, { Component } from "react";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

class ExperienceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
      firstClick: false,
      onClickBrandCalled: false,
    };
  }

  onClickBrand(e) {
    console.log("CLICKED");
    if (this.state.firstClick && !this.state.onClickBrandCalled) {
      console.log("FIRST CLICK: DONT OPEN");
      console.log(e.target.tagName);
      e.preventDefault();
      this.setState({ firstClick: false, onClickBrandCalled: true });
    } else {
      console.log("NOT FIRST CLICK, please open");
    }
  }

  render() {
    console.log("RERENDERING");
    const { instagram, soundcloud, hyperfollow } = this.props;

    console.log(
      `showIcons: ${this.state.showIcons}, firstClick: ${this.state.firstClick}, onClickBrandCalled: ${this.state.onClickBrandCalled}`
    );

    // NOTE: onMouseOver and onMouseOut default to clicks for mobile, and hover on web
    if (!this.state.showIcons) {
      return (
        <div
          className="expbutton"
          onMouseOver={(e) => {
            console.log("PARENT ON MOUSE OVER CALLED");
            if (!this.state.showIcons) {
              this.setState({ showIcons: true, firstClick: true });
            }
          }}
          // tabIndex={0}
        >
          <p>EXPERIENCE</p>
        </div>
      );
    } else {
      return (
        <div
          className="expbutton"
          // onMouseOver={(e) => console.log(e.target.tagName)}
          onMouseOut={(e) => {
            console.log("CHILD ON MOUSE OUT CALLED");
            console.log(e.target.tagName, typeof e.target.tagName);
            if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
              // Handles edge case: button closes when svg tag is clicked
              this.setState({
                showIcons: false,
                firstClick: false,
                onClickBrandCalled: false,
              });
            }
          }}
          onBlur={() =>
            this.setState({
              showIcons: false,
              firstClick: false,
              onClickBrandCalled: false,
            })
          }
          // tabIndex={0}
        >
          {/* NOTE: These tabs will need a double click to work */}
          <ul className="icons">
            {instagram ? (
              <li>
                <a
                  target="_blank"
                  href={instagram}
                  onClick={(e) => this.onClickBrand(e)}
                >
                  <FontAwesomeIcon
                    className="ico"
                    icon={faInstagram}
                    size="2x"
                  />
                </a>
              </li>
            ) : null}
            {soundcloud ? (
              <li>
                <a
                  target="_blank"
                  href={soundcloud}
                  onClick={(e) => this.onClickBrand(e)}
                >
                  <FontAwesomeIcon
                    className="ico"
                    icon={faSoundcloud}
                    size="2x"
                  />
                </a>
              </li>
            ) : null}
            {hyperfollow ? (
              <li>
                <a
                  target="_blank"
                  href={hyperfollow}
                  onClick={(e) => this.onClickBrand(e)}
                >
                  <FontAwesomeIcon className="ico" icon={faMusic} size="2x" />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      );
    }
  }
}

export default ExperienceButton;
