import React, { Component } from "react";
import "./MailsDefault.css";

class Mail4 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          <b>Lieber Kunde</b>
        </p>
        <p>
          Bitte beachten Sie, dass Ihre Apple-ID verfallen in weniger als 48
          stunden. Es ist unerlässlich, eine Prüfung der Daten durchzuführen
          vorhanden ist, sonst Ihre Apple-ID zerstört werden. Klicken Sie
          einfach auf den Link unten .<br />
          <a href="www.google.com" class="internal-link" target="_blank">
            Klicken Sie auf Jetzt hier zu überprüfen
          </a>
          <br />
          Wir von Apple eine Verifizierung, wenn eine E-Mail-Adresse als
          Apple-ID gewählt wird. Ihre Apple-ID kann nicht verwendet werden, bis
          Sie es überprüfen.
          <br />
          <br />
          Apple Support.
          <br />
          <br />
          <sup>
            Copyright © 2020 App1e Inc. 1 Infinite Loop, Cupertino, CA 95014,
            United States. all rights reserved
          </sup>
        </p>
      </div>
    );
  }
}

Mail4.defaultProps = {
  senderName: "Apple Support",
  sender: "support@apple.com",
  date: "July 01, 2020, 04:12",
  subject: "Wichtige Mitteilung!",
  capital: "A",
  keyID: 4,
  avatarColor: "grey",
  unseen: true,
};

export default Mail4;
