import React, { Component } from "react";
import "./MailsDefault.css";

class Mail20 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>131 MB</p>
        <p>
          Ihre LMU Mailbox-Kontingent ist voll und muss jetzt aktualisiert
          werden, indem Sie auf diese Aktualisierung Web-Link&gt;: &gt;&gt;&gt;{" "}
          <a
            href="/phishing/selbstlerntest-phishing/"
            target="_blank"
            class="internal-link"
          >
            *link entfernt*
          </a>
        </p>
        <p>
          Anmerkung: Wenn Sie nicht in der Lage sind, auf den Link zu klicken,
          wird empfohlen, sie in einen neuen Browser zu kopieren und einzufügen,
          um Ihre E-Mail-Kontingent für das Update zu erhöhen. Nichts, um die
          korrekten erforderlichen Verifizierungsdetails einzureichen, wie für
          die Aktualisierung verlangt, wird Ihr Postfachkonto automatisch
          deaktiviert.
          <br />
          IT-Dienstleister <br />© 2020 mail inc
        </p>
      </div>
    );
  }
}

Mail20.defaultProps = {
  senderName: "IT-Dienstleister",
  sender: "it.dienstleister@lmu.de",
  date: "Mai 13, 2020, 10:25",
  subject: "Mail Kontingent",
  capital: "L",
  keyID: 20,
  avatarColor: "green",
  unseen: true,
};

export default Mail20;
