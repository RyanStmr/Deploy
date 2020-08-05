import React, { Component } from "react";
import "./MailsDefault.css";

class Mail46 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Ein Stipendium gibt es hier
          http://www.mystipendium.de/stipendien/dream-new-stipendium
          ====================================================== Dies ist eine
          &uuml;ber UniWorX-Interface versendete Email. Absender: Hans Ohlmer
          Kurs: Formale Sprachen und Komplextit&auml;t
        </p>
      </div>
    );
  }
}

Mail46.defaultProps = {
  senderName: "Hans Ohlmer",
  sender: "uniworx@ifi.lmu.de",
  date: "July 13, 2020, 02:13",
  subject: "Interesse an einem Studienaufenthalt ind Neuseeland?",
  capital: "H",
  keyID: 46,
  avatarColor: "green",
  unseen: true,
};

export default Mail46;
