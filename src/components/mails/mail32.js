import React, { Component } from "react";
import "./MailsDefault.css";

class Mail32 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <p>Sehr geehrte Kunde,</p>

            <p>Sie haben (1) wichtige Nachricht!</p>

            <p>&nbsp;</p>

            <p>
              Nach mehreren erfolglosen Versuchen, Sie telefonisch &uuml;ber den
              Kundendienst zu erreichen, Wir haben Ihnen eine vertrauliche
              Nachricht in Ihrem Kundenbereich hinterlassen, um Ihren wichtige
              Informationen zu Ihrem Konto mitzuteilen. Wir laden Sie ein, es so
              bald wie m&ouml;glich zu lesen
            </p>

            <p>&nbsp;</p>

            <p>https://kund.sparkasseeu.at/web/ps/smarttal/retail/en/login</p>

            <p>&nbsp;</p>

            <p>Freundliche Gr&uuml;&szlig;e</p>

            <p>Ihre Sparkasse</p>

            <p>&copy;2020 Sparkasse Bank Austria AG&nbsp;</p>
          </body>
        </html>
      </div>
    );
  }
}

Mail32.defaultProps = {
  senderName: "Sparkasse AT",
  sender: "info.security@sparkasse.at",
  date: "June 1, 2020, 3:40",
  subject: "Wichtige Nachricht",
  capital: "S",
  keyID: 32,
  avatarColor: "red",
  unseen: true,
};

export default Mail32;
