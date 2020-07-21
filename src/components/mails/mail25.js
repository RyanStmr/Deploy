import React, { Component } from "react";

class Mail25 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Betreff/Subject: [TICKET #84676] - Sie wurden gehacked</p>
        <hr />
        <p>
          &nbsp;Das ist eine wichtige Nachricht über das Konto von:
          max.mustermann@campus.lmu.de
          <br />
          <br />
          Wir schicken Ihnen diese Mitteilung,
          <br />
          um Ihnen Bescheid zu geben, dass Ihr Software Account gehacked wurde.
          <br />
          <br />
          Wir haben die Sicherheitslücke vor ca 3h bereits wieder geschlossen,
          <br />
          aber Sie müssen sich in Ihrem Account bitte einloggen um Ihn erneut
          abzusichern.
          <br />
          Bitte ändern Sie Ihr Passwort.
          <br />
          <br />
          Updaten Sie Ihr Passwort -{" "}
          <a href="/phishing/selbstlerntest-phishing/" class="internal-link">
            Klicken Sie hier
          </a>
          <br />
          <br />
          Bitte aktualisieren Sie Ihre Informationen so schnell wie
          <br />
          möglich und zögern Sie nicht und zu kontaktieren für weitere
          Hilfestellung.
          <br />
          <br />
          Stefanie Baier
          <br />
          Sicherheitsabteilung
        </p>
        <p>&nbsp;</p>
        <p>
          <sup>
            Cannot see images? Visit the{" "}
            <a href="/phishing/selbstlerntest-phishing/" class="internal-link">
              online version{" "}
            </a>
            !<br />* Bonus applies subject to site terms and conditions, For
            further information go to promotions page on site.
            <br />
            This message was intended for: max.mustermann@campus.lmu.de
            <br />
            To no longer receive these recommendations:{" "}
            <a href="/phishing/selbstlerntest-phishing/" class="internal-link">
              Visit this link
            </a>
            <br />
            If you did not give permission to receive emails from this sender,{" "}
            <a href="/phishing/selbstlerntest-phishing/" class="internal-link">
              please notify us{" "}
            </a>
          </sup>
        </p>
      </div>
    );
  }
}

Mail25.defaultProps = {
  senderName: "Stefanie Baier",
  sender: "it.security@campus.lmu.de",
  date: "June 25, 2020,5:47",
  subject: "[TICKET #84676] - Sie wurden gehacked",
  capital: "S",
  keyID: 25,
  avatarColor: "green",
  unseen: true,
};

export default Mail25;
