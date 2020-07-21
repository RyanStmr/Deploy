import React, { Component } from "react";
import "./MailsDefault.css";

class Mail26 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Betreff/Subject:Herzlichen Glückwunsch!
          <br />
        </p>
        <hr />
        <p>
          Herzlichen Glückwunsch! Sie haben die Summe von £860, 000GBP von der
          2020 FACEBOOK ONLINE PROMOTION ausgezeichnet worden. Weitere
          Anweisungen erhalten diese Link: *Link entfernt*
        </p>
        <p>Danke</p>
      </div>
    );
  }
}

Mail26.defaultProps = {
  senderName: "Facebook Online Promotion",
  sender: "promotion@facebook.com",
  date: "Mai 25, 2020, 03:03",
  subject: "Herzlichen Glückwunsch!",
  capital: "FB",
  keyID: 26,
  avatarColor: "blue",
  unseen: true,
};

export default Mail26;
