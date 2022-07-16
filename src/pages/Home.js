import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Emmanuel Verbrugge</h1>
          <h2>Développeur Front-end</h2>
          <div className="pdf"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
