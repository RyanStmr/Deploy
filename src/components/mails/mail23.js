import React, { Component } from "react";
import "./MailsDefault.css";

class Mail23 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Hallo </p>
        <p>
          Der ADAC hat eine grosse Herbstlotterie mit seinen
          Kooperationspartnern gestartet. Mithilfe Ihres persönlichen Codes
          innerhalb dieser eMail können Sie bis zum 31.10.2020 überprüfen, ob
          Sie einen der drei oben steheneden Preise gewonnen haben.
        </p>
        <p>
          Ihr persönlicher Gewinncode ist mit dieser eMail-Adresse verknüpft:
          max.mustermann@gmail.com
        </p>
        <p>
          <b>Prüfen Sie mithilfe Ihres Codes, ob Sie gewonnen haben! </b>
        </p>
        <p>
          <b> Z23F56 </b>
        </p>
        <p>
          <a
            href="/phishing/selbstlerntest-phishing/"
            target="_blank"
            class="internal-link"
          >
            Jetzt überprüfen
          </a>
        </p>
      </div>
    );
  }
}

Mail23.defaultProps = {
  senderName: "ADAC",
  sender: "info@adac.de",
  date: "June 26, 2020, 5:47",
  subject: "1 Jahr kostenlos tanken",
  capital: "A",
  keyID: 23,
  avatarColor: "grey",
  unseen: true,
};

export default Mail23;
