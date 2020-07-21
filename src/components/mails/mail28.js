import React, { Component } from "react";
import "./MailsDefault.css";

class Mail28 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <h2 class="hx">Ungewöhnliche IP -Aktivität</h2>
        <p>
          Wir haben festgestellt Jemand hat gerade versucht, Adresse anmelden in
          Ihre Web- Mail-Konto von anderen IP .
        </p>
        <p>
          Bitte bestätigen Sie Ihre Identität heute oder Ihr Konto wird
          deaktiviert, aufgrund von Bedenken wir für die Sicherheit und
          Integrität Ihrer Web-Mail haben ..
          <br />
          &nbsp;
          <br />
          Um Ihre Identität bestätigen , Wir empfehlen Ihnen, gehen Sie zu
          <br />
          &nbsp;
          <br />
          <a href="/phishing/selbstlerntest-phishing/" class="internal-link">
            Jetzt Prüfen
          </a>
          <br />
          &nbsp;
          <br />
          Vielen Dank,
          <br />
          Das Web-Mail- Account-Team
        </p>
      </div>
    );
  }
}

Mail28.defaultProps = {
  senderName: "Web-Mail-Account Team",
  sender: "info@web.mail.de",
  date: "June 30, 2020, 09:13",
  subject: "Ungewöhnliche IP -Aktivität",
  capital: "W",
  keyID: 28,
  avatarColor: "black",
  unseen: true,
};

export default Mail28;
