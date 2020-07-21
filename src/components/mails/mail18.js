import React, { Component } from "react";
import "./MailsDefault.css";

class Mail18 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          Hiermit werden alle Benutzer darüber informiert, dass der Mail-Dienst
          der LMU derzeit auf die neueste Anti-Virus- / Anti-Spam-Version 2020
          aktualisiert wird.
        </p>
        <p>
          {" "}
          Sie müssen Ihr Konto innerhalb der nächsten 48 Stunden bestätigen /
          bestätigen.
        </p>
        <p>
          Bitte klicken Sie hier *
          <a
            href="/phishing/selbstlerntest-phishing/"
            class="internal-link"
            target="_blank"
          >
            link entfernt
          </a>
          *, um Ihr Konto zu bestätigen.
        </p>
        <p> Vielen Dank. it.service@lmu.de</p>
      </div>
    );
  }
}

Mail18.defaultProps = {
  senderName: "IT Service LMU",
  sender: "it.service@lmu.de",
  date: "June 25, 2020, 03:45",
  subject: "Aktualisieren",
  capital: "L",
  keyID: 18,
  avatarColor: "green",
  unseen: true,
};

export default Mail18;
