import React, { Component } from "react";
import PicPost from "../picpost";
// import sadface from "../../sadface.png";
import cornerstone from "../../cornerstone.jpg";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        <PicPost
          title="CORNERSTONE"
          date="19.05.23"
          picture={cornerstone}
          excerpt={["Cornerstone Brewery", "Thursday, May 23, 2019"]}
          instagram="https://www.instagram.com/stories/highlights/17862945349403289/"
        />
      </div>
    );
  }
}

export default Home;
