import React from "react";
import img from "../assets/observe.png";

import Headline from "./headline.jsx";
import Expertise from "./expertise.jsx";
import Experience from "./experience.jsx";
import Education from "./education.jsx";
import Honors from "./honors.jsx";
import Projects from "./projects.jsx";


const App = () => {
  return (
    <div className="wrapper">

      <div className="headline one">
        <div className="image-container">
          <img className="image" src={img}></img>
        </div>
      </div>

      <Headline/>

      <div className="section three"> Introduction </div>

      <div className="section one">
        Hi, I’m Cameron! I’m a recent Data Science graduate from UC Berkeley.
        I’m fascinated with cryptography, distributed networks, and computer vision,
        and love to explore how modern innovations will affect future security protocols.
        Currently, I’m getting up to speed on quantum computing and the transition from factoring- to lattice-based encryption.
        Aside from my interests in software, I’m an avid automobile enthusiast (go Lewis Hamilton!).
        I love meeting new people, so feel free to set up a conversation.
      </div>

      <div className="section one"> Expertise </div>

      <Expertise/>

      <div className="section three"> Experience </div>

      <Experience/>

      <div className="section one"> Education </div>

      <Education/>

      <div className="section three"> Honors </div>

      <Honors/>

      <div className="section"> Projects </div>

      <Projects/>

    </div>
  )
}

export default App;