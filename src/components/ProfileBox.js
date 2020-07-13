import SettingsIcon from "@material-ui/icons/Settings";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import InfoIcon from "@material-ui/icons/Info";

class ProfileBox extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        <Button style={{ backgroundColor: "#bab6b6", margin: "5px" }}>
          {" "}
          <SettingsIcon size="large" style={{ color: "black" }}></SettingsIcon>
        </Button>
        <Button style={{ backgroundColor: "#bab6b6", margin: "5px" }}>
          {" "}
          <InfoIcon style={{ color: "black" }}></InfoIcon>
        </Button>
        <Button style={{ backgroundColor: "#75c974", margin: "5px" }}>
          {" "}
          <ExitToAppIcon style={{ color: "black" }}></ExitToAppIcon>Logout
        </Button>
      </div>
    );
  }
}

export default ProfileBox;
