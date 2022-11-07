import React from "react";

const Experience = () => {
  return (
    <div className="section">

      <div className="timeline-container">

        <div className= "timeline-contents">
          <div className="timeline-line"></div>
          <div className="timeline-outer-circle"></div>
          <div className="timeline-inner-circle"></div>
        </div>

        <div className="timeline-info">
          <div className="timeline-info-location"> Remote PST </div>
          <div className="timeline-info-title section-subtitle"> Cibus </div>
          <div className="timeline-info-job"> Senior LIMS Research Associate </div>
          <div className="timeline-info-date"> October 2021 - Present </div>
        </div>
        <div className="timeline-description">
          <ul>
            <li>
              Enabled continuous, automatic fuzz testing for 9 different high-profile open-source projects
              (openexr, sleuthkit, etc.) that exist as dependencies in Google’s codebase and increased fuzz
              coverage for 16 more (libyaml, uriparser, etc.)
            </li>
            <li>
              Enabled continuous, automatic fuzz testing for 9 different high-profile open-source projects
              (openexr, sleuthkit, etc.)
            </li>
            <li>
              Enabled continuous, automatic fuzz testing for 9 different high-profile open-source projects
              (openexr, sleuthkit, etc.)
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Experience;