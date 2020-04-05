import React, { Component } from "react";
import "./styles.css";
// import "../../modules/font-awesome-4.7.0/css/font-awesome.min.css";
import faInstagram from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { instagram, soundcloud, hyperfollow } = this.props;

    let instagramButton = "";
    let soundcloudButton = "";
    let hyperfollowButton = "";

    if (instagram) {
      instagramButton = (
        <a target="_blank" href={instagram}>
          <FontAwesomeIcon className="ico" icon={faInstagram} size="2x" />
        </a>
      );
    }

    console.log(soundcloud);
    if (soundcloud) {
      soundcloudButton = (
        <a target="_blank" href={soundcloud}>
          <FontAwesomeIcon className="ico" icon={faSoundcloud} size="2x" />
        </a>
      );
    }

    return (
      <ul className="icons">
        <li>{instagramButton}</li>
        <li>{soundcloudButton}</li>
      </ul>
    );
  }
}

export default PostNavbar;
