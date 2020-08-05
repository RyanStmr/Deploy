import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Startpage.css";

const StartPage = (props) => {
  return (
    <div className="StartPage">
      <hr></hr>
      <h2>Lets get started!</h2>
      <p>
        Welcome to our study, please make sure you have about{" "}
        <strong>30 minutes</strong> of time spare. Due to the serious situation
        of Corona, the study will be held online, and consists of 4 stages.
        <p>
          You can exit the study at any time. Participants will be reimbursed
          with 5 Euros (PayPal or Amazon Voucher) or 1 MMI point.{" "}
        </p>
        Please note that the reward will be obtained at the end of study, more
        information will be provided at the end.
      </p>
      <hr></hr>
      <h2>Stages</h2>
      <ol style={{ listStyleType: "clear" }}>
        <li>Consent & Agreement</li>
        <li>Webcam calibration</li>
        <li>Sorting email inbox task</li>
        <li>Survey</li>
      </ol>

      <hr></hr>
      <h2>Requirements</h2>
      <ol style={{ listStyleType: "clear" }}>
        <li>Laptop or PC with a decent Webcam</li>
        <li>
          Good room lighting (Make sure there is no strong light behind you)
        </li>
        <li>18 years or older</li>
        <li>No glasses, contact lenses are just fine</li>
        <li>Google Chrome or Firefox Browser</li>
        <li>~30 minutes of spare time</li>
      </ol>

      <hr></hr>

      <Link
        to="/ConsentPage"
        activeClassName="active"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <Button
          style={{
            width: "300px",
            marginBottom: "40px",
            backgroundColor: "#04B45F",
          }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default StartPage;
