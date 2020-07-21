import React, { Component } from "react";
import pic from "./mail1.jpg";
import "./MailsDefault.css";

class Mail1 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <img src={pic}></img>
      </div>
    );
  }
}

Mail1.defaultProps = {
  sender: "win@domain.com",
  date: "September 23, 2019 19:12",
  subject: "Relog - Windows1",
  capital: "H",
  keyID: 1,
  avatarColor: "blue",
  unseen: true,
};

export default Mail1;
