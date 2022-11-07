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

      <div className="section three section-title"> INTRODUCTION </div>

      <div className="section one">
        <p>
          Hi, I’m Cameron! I’m a recent Data Science graduate from UC Berkeley. I have been working at a Genetic Engineering
          startup- implementing a LIMS solution for the production team and leading utilization of the resulting PostgreSQL database.
          Though I have an intesrest in genetic engineering, I have transitioned to the space of software development, as my love of building, efficiency, and the rapid
          pace of technology development has stolen my heart. <br></br> <br></br>

          Broadly, I'm fasciinated with data engineering & data
          science, system architechture, and artifical intelligence. Currently, I am diving deeper into machine learning and
          full-stack web application development. Aside from from my software interests, I am a service-oriented individual who loves
          to be helpful and kind. Currently based in San Diego due the remote work environment but open to relocation with the hopes of
          returning to the Bay Area in the future.
        </p>
      </div>

      <div className="section one section-title"> EXPERTISE </div>

      <Expertise/>

      <div className="section three section-title"> EXPERIENCE </div>

      <Experience/>

      <div className="section one section-title"> EDUCATION </div>

      <Education/>

      <div className="section three section-title"> HONORS </div>

      <Honors/>

      <div className="section section-title"> PROJECTS </div>

      <Projects/>

    </div>
  )
}

export default App;