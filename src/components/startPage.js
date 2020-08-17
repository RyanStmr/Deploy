import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logos from "./Logos.png";

import "./Startpage.css";

const StartPage = (props) => {
  return (
    <div className="StartPage">
      <img src={Logos} alt="Logos" width="900" height="100"></img>
      <hr></hr>
      <h2>Lets get started!</h2>
      <p>
        Welcome to our study, please make sure you have about{" "}
        <strong>30 minutes</strong> of time spare. Due to the serious situation
        of Corona, the study will be held online and consists of{" "}
        <strong> 5 stages.</strong>
        <p>
          You can exit the study at any time. You will be reimbursed with 5
          Euros (PayPal or Amazon Voucher) or 0.5 MMI points (Only valid LMU
          students).{" "}
        </p>
        Please note that the reward will be obtained at the end of study, more
        information will be provided at the end.
      </p>
      <p>
        <br></br>
        <strong>
          This study is a joint research project between the Media Informatics
          Department of the LMU Munich, the Research Institute for Cyber Defense
          (CODE) of the Bundeswehr University and Ruhr University Bochum.
        </strong>
      </p>
      <hr></hr>
      <h2>Stages</h2>
      <ol style={{ listStyleType: "clear", fontWeight: "bolder" }}>
        <br></br>
        <li>Consent & Agreement</li>
        <br></br>

        <li>Webcam calibration</li>
        <br></br>

        <li>Sorting emails</li>
        <br></br>

        <li>Calibration accuracy test</li>
        <br></br>

        <li>Survey</li>
      </ol>

      <hr></hr>
      <h2>Requirements</h2>
      <br></br>
      <ol style={{ listStyleType: "clear" }}>
        <li>Laptop or PC with a decent Webcam</li>
        <li>
          Good room lighting (Make sure there is no strong light behind you)
        </li>
        <li>18 years or older</li>
        <li>No glasses if possible, preferably contact lenses</li>
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
