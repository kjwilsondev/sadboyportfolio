import React, { Component } from "react";
import "./styles.css";

class PicPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("instantiated Post render");
    const { title, date, picture, excerpt, instagram } = this.props;

    return (
      <div className="post">
        <div className="post-title">
          <li>{title}</li>
          <li>{date}</li>
        </div>
        <img src={picture} className="post-pic" />
        {/* {excerpt.map((line) => {
          return <p>{line}</p>;
        })} */}
        <p className="post-excerpt">{excerpt}</p>
        <a
          // className="App-link"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
        <a
          // className="App-link"
          href="/team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team Page
        </a>
      </div>
    );
  }
}

export default PicPost;
