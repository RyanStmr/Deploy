import React, { Component } from "react";
import "./MailsDefault.css";

class Mail70 extends Component {
  state = {};
  render() {
    return <div onMouseOver={this.props.inEmailText}></div>;
  }
}

Mail70.defaultProps = {
  senderName: "xxxx",
  sender: "xxxxx",
  date: "xxxxx",
  subject: "xxxxx",
  capital: "xxxxx",
  keyID: 0,
  avatarColor: "xxxx",
  unseen: true,
};

export default Mail70;
