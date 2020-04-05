import React, { Component } from "react";
import PostNavbar from "../postnavbar";
import "./styles.css";

class PicPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("instantiated Post render");
    // const { title, date, picture, excerpt, credit, instagram } = this.props;
    const { title, date, picture, instagram, soundcloud } = this.props;

    return (
      <div className="post">
        <ul className="post-top">
          {/* <li>
            <PostNavbar instagram={instagram} soundcloud={soundcloud} />
          </li> */}
          <li>
            <img src={picture} className="post-pic" />
            <PostNavbar instagram={instagram} soundcloud={soundcloud} />
          </li>
        </ul>
        <div className="post-title">
          <li>{title}</li>
          <li>{date}</li>
        </div>
      </div>
    );
  }
}

export default PicPost;
