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
    const { title, date, picture, instagram } = this.props;

    return (
      <div>
        <div className="post">
          <img src={picture} className="post-pic" />
          {/* <p className="post-excerpt">{excerpt}</p>
        <p className="post-credit">PHOTO CREDIT: {credit}</p> */}
          <div className="post-title">
            <li>{title}</li>
            <li>{date}</li>
          </div>
        </div>
        <PostNavbar instagram={instagram} />
      </div>
    );
  }
}

export default PicPost;
