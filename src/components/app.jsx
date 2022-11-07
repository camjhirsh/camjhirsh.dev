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

      <div className="three"> Introduction </div>

      <div className="one">
        Hi, I’m Cameron! I’m a recent Data Science graduate from UC Berkeley.
        I’m fascinated with cryptography, distributed networks, and computer vision,
        and love to explore how modern innovations will affect future security protocols.
        Currently, I’m getting up to speed on quantum computing and the transition from factoring- to lattice-based encryption.
        Aside from my interests in software, I’m an avid automobile enthusiast (go Lewis Hamilton!).
        I love meeting new people, so feel free to set up a conversation.
      </div>

      <div className="one"> Expertise </div>

      <Expertise/>

      <div> Experience </div>

      <Experience/>

      <div> Education </div>

      <Education/>

      <div> Honors </div>

      <Honors/>

      <div> Projects </div>

      <Projects/>

    </div>
  )
}

export default App;