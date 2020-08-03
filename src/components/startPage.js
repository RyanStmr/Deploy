import React from "react";
import { Link } from "react-router-dom";

import "./Startpage.css";

const StartPage = (props) => {
  return (
    <div className="StartPage">
      <h1>Lets get started!</h1>
      <p>
        Welcome to our study, please make sure you have about{" "}
        <strong>30 minutes</strong> of time spare.
      </p>

      <hr></hr>
      <h2>Requirements</h2>
      <ol style={{ listStyleType: "clear" }}>
        <li>Laptop or PC with Webcam</li>
        <li>
          Good room lighting (Make sure there is no strong light behind you)
        </li>
        <li>No glasses, contact lenses are just fine</li>
        <li>Google Chrome Browser</li>
        <li>~30 minutes of spare time</li>
      </ol>

      <hr></hr>

      <Link
        to="/ConsentPage"
        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <button style={{ width: "300px", marginBottom: "40px" }}>
          Continue
        </button>
      </Link>
    </div>
  );
};

export default StartPage;
