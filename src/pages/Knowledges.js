import React from "react";
import Navigation from "../components/Navigation";
import Experience from "../components/Knowledges/Experience";
import Hobbies from "../components/Knowledges/Hobbies";
import Languages from "../components/Knowledges/Languages";
import OtherSkills from "../components/Knowledges/OtherSkills";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
