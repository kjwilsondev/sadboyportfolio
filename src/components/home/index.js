import React, { Component } from "react";
import Name from "../name";
import PicPost from "../picpost";
import cornerstone from "../../cornerstone.jpg";
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
      </div>
    );
  }
}

export default Home;
