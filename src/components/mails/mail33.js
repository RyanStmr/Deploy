import React, { Component } from "react";
import "./MailsDefault.css";

class Mail33 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          <img
            alt="Sparkasse Autokredit Test | Netzsieger"
            src="https://www.netzsieger.de/mdx/product/910/sparkasseautokredit359cd.jpg"
            width="200px"
            height="200px"
          />
        </p>

        <p>Sehr geehrte Kunde,</p>

        <p>
          Ein weiteres Mal wurde die Pr&uuml;fung durchgef&uuml;hrt, die in
          einigen F&auml;llen vorgenommen wurde, wenn Sie sich &uuml;ber My
          SPARKASSE App anmelden.
        </p>

        <p>
          Nachdem Sie Ihren Benutzernahmen und Ihr Passwort eingegeben,
          best&auml;tigen Sie einfach die Anmeldung mit der Mobile Banking App.
        </p>

        <p>
          Der zus&auml;tzliche Schritt ist aufgrund der neen europ&auml;ischen
          Vorschriften (pSD2) obligatorisch.
        </p>

        <p>
          Da Sie unsere neue zus&auml;tzliche Sicherheitsmethode noch nicht
          verwenden, k&ouml;nnen Sie Ihr Internet-Banking ab Montag, 29.Juni,
          nicht mehr nutzen.
        </p>

        <p>Aus diesem Grund bitten wir Sie, unsere Anfrage nachzukommen.</p>

        <p>Mit freundlichen Gr&uuml;&szlig;en,</p>

        <p>Helger Heidemann</p>

        <p>Direktor des Kundendienstes&nbsp;&nbsp;</p>
      </div>
    );
  }
}

Mail33.defaultProps = {
  senderName: "Sparkasse",
  sender: "inf@sparkasse.com",
  date: "July 1, 2020, 02:11",
  subject: "Anmeldung mit der Mobile Banking App",
  capital: "S",
  keyID: 33,
  avatarColor: "red",
  unseen: true,
};

export default Mail33;
