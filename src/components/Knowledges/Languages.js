import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.5 },
      { id: 2, value: "Html", xp: 0.8 },
      { id: 3, value: "Css", xp: 0.8 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.5 },
      { id: 2, value: "Sass", xp: 0.8 },
      { id: 3, value: "Bootstrap", xp: 0.8 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        ></ProgressBar>
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="framworksDisplay"
        ></ProgressBar>
      </div>
    );
  }
}

export default Languages;
