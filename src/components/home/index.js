import React, { Component } from "react";
import Name from "../name";
import PicPost from "../picpost";
import cornerstone from "../../cornerstone.jpg";
import stars from "../../stars.jpg";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        <Name title="NOSTALGIA" />
        <PicPost
          title="CORNERSTONE"
          date="19.05.23"
          picture={cornerstone}
          // excerpt="LAGUNA BAY STUDIOS"
          // credit="ZOO"
          instagram="https://www.instagram.com/stories/highlights/17862945349403289/"
        />
        <PicPost
          title="WHEN THE STARS DONT ALIGN"
          date="18.08.16"
          picture={stars}
          // excerpt="SO HOPE FOR THE BEST"
          // credit="SCOTTY"
          instagram="https://www.instagram.com/stories/highlights/17853292324396359/"
          soundcloud="https://soundcloud.com/sadboykj/when-stars-dont-align"
        />
      </div>
    );
  }
}

export default Home;
