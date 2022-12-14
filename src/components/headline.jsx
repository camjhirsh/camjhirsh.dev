import React from "react";

import resume from '../assets/resume.pdf';

const Headline = () => {

  return (
    <div className="headline two">
      <div className="headline-content">

        <div className="name"> <span className="first-name"> CAMERON </span> <span className="orange"> HIRSH </span> </div>

        <div className="subtitle">

          <span className="cam-headline"> Developer, Designer, and Innovator </span>

          <span className="social-links">

            <a href="https://www.linkedin.com/in/camjhirsh/">
              <div className="outer-icon">
                <div className="inner-icon">
                  <i className="social-icon fab fa-lg fa-linkedin"></i>
                </div>
              </div>
            </a>

            <a href="https://github.com/camjhirsh/">
              <div className="outer-icon">
                <div className="inner-icon">
                  <i className="social-icon fab  fa-lg  fa-github"></i>
                </div>
              </div>
            </a>

            <a href={resume} target = "_blank">
              <div className="outer-icon">
                <div className="inner-icon">
                  <i className="social-icon fa-solid fa-file"></i>
                </div>
              </div>
            </a>

            <a href="https://github.com/camjhirsh/">
              <div className="outer-icon">
                <div className="inner-icon">
                  <i className="social-icon fa-regular fa-calendar"></i>
                </div>
              </div>
            </a>

          </span>
        </div>

        <div className="sub-headline">
          <span className="sub-headline-title"> Location </span>
          <span className="sub-headline-title"> Phone </span>
          <span className="sub-headline-title"> Email </span>
          <span className="sub-headline-title"> PGP Fingerprint </span>
          <span className="sub-headline-detail"> Berkeley, CA </span>
          <span className="sub-headline-detail"> 858.205.3649 </span>
          <span className="sub-headline-detail"> camjhirsh@gmail.com </span>
          <span className="sub-headline-detail">
            12345678910
            BHSJBDJLSMDSKL
            ADKLNFDKSLFND
          </span>
        </div>

      </div>
    </div>
  )

}

export default Headline;