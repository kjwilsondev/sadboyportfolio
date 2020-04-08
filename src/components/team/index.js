import React, { Component } from "react";
import ceo from "../../ceo.jpg";
import kid from "../../dnakid.jpg";
import kids from "../../dnashow.jpg";

class Team extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ceo} className="App-logo" alt="ceo" />
          <p>ceo</p>
          <img src={kid} className="App-logo" alt="kid" />
          <img src={kids} className="App-logo" alt="kids" />
          <a
            className="App-link"
            href="https://www.makeschool.com/portfolio/kjwilson"
            target="_blank" // opens link in new tab
            rel="noopener noreferrer"
          >
            portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default Team;
