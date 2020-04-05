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
    };
  }

  render() {
    // const { instagram, soundcloud, hyperfollow } = this.props;

    // let instagramButton = "";
    // let soundcloudButton = "";
    // let hyperfollowButton = "";

    // if (instagram) {
    //   instagramButton = (
    //     <a target="_blank" href={instagram}>
    //       <FontAwesomeIcon className="ico" icon={faInstagram} size="2x" />
    //     </a>
    //   );
    // }

    // if (soundcloud) {
    //   soundcloudButton = (
    //     <a target="_blank" href={soundcloud}>
    //       <FontAwesomeIcon className="ico" icon={faSoundcloud} size="2x" />
    //     </a>
    //   );
    // }

    // if (hyperfollow) {
    //   hyperfollowButton = (
    //     <a target="_blank" href={hyperfollow}>
    //       <FontAwesomeIcon className="ico" icon={faMusic} size="2x" />
    //     </a>
    //   );
    // }

    // let content = "EXPERIENCE";
    // if (this.state.showIcons) {
    //   content = (
    // <ul className="icons">
    //   <li>i</li>
    //   <li>s</li>
    //   <li>f</li>
    // </ul>
    //   );
    // }

    console.log(this.state.showIcons);
    return (
      <div
        className="expbutton"
        onMouseOver={() => this.setState({ showIcons: true })}
        onMouseOut={() => this.setState({ showIcons: false })}
        onFocus={() => this.setState({ showIcons: !this.state.showIcons })}
        onBlur={() => this.setState({ showIcons: false })}
      >
        {this.state.showIcons ? (
          <ul className="icons">
            <li>i</li>
            <li>s</li>
            <li>f</li>
          </ul>
        ) : (
          "EXPERIENCE"
        )}
        {/* hello */}
        {/* <ul className="icons">
          <li>{instagramButton}</li>
          <li>{soundcloudButton}</li>
          <li>{hyperfollowButton}</li>
        </ul> */}
      </div>
    );
  }
}

export default ExperienceButton;
