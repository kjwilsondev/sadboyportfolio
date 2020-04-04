import React, { Component } from "react";
import "./styles.css";
// import "../../modules/font-awesome-4.7.0/css/font-awesome.min.css";
import {
  faInstagram,
  faSoundcloud,
  faApple,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { instagram, soundcloud, apple, spotify } = this.props;

    let instagramButton = "";

    if (instagram !== "NONE") {
      instagramButton = (
        <a target="_blank" href={instagram}>
          <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
        </a>
      );
    }

    return (
      <div className="icons">
        <p>{instagramButton}</p>
      </div>
    );
  }
}

export default PostNavbar;
