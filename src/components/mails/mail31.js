import React, { Component } from "react";
import "./MailsDefault.css";

class Mail31 extends Component {
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

            <p>
              Wir bedauern, Ihnen mitteilen zu m&uuml;ssen, dass wir Ihr Konto
              zum Schutz von Ihnen eingeschr&auml;nkt haben. Diese
              Sicherheitsma&szlig;nahme wurde wirksam, da Sie unsere
              Sicherheitsanwendung noch nicht aktualisiert haben (S
              Identity-App)
            </p>

            <p>
              Um weiterhin sichere Zahlungsdienste anbieten zu k&ouml;nnen,
              m&uuml;ssen wir unsere Sicherheits-App aktualisieren. Bitte
              aktualisieren Sie die Sicherheits-App sofort. Es fallen keine
              Kosten f&uuml;r Sie an.
            </p>

            <p>
              http://sparkasse.at/sgruppe/privatkunden/digitales-banking/inside/
            </p>

            <p>Freundliche Gr&uuml;&szlig;e</p>

            <p>
              Warten Sie nicht l&auml;nger!
              <br />
              Ihre Erste Bank &amp; Sparkasse
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail31.defaultProps = {
  senderName: "Sparkasse",
  sender: "info.security@sparkasse.at",
  date: "June 12, 2020, 03:43",
  subject: "Ihre Bestätigung ist erforderlich",
  capital: "S",
  keyID: 32,
  avatarColor: "red",
};

export default Mail31;
