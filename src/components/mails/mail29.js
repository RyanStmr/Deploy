import React, { Component } from "react";
import "./MailsDefault.css";

class Mail29 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Sehr geehrte(r) ,<br />
          <br />
          unsere Aufforderung blieb bislang bedauerlicherweise erfolglos. Nun
          geben wir Ihnen hiermit letztmalig die Möglichkeit, den ausbleibenden
          Betrag unseren Mandanten Pay Online GmbH zu begleichen.
          <br />
          <br />
          Eine vollständige Forderungsausstellung NR. 481075944, der Sie alle
          Buchungen entnehmen können, befindet sich im Anhang. Die vollständige
          Zahlung erwarten wir bis zum 26.07.2020.
          <br />
          <br />
          Aufgrund des andauernden Zahlungsrückstands sind Sie angewiesen
          zusätzlich, die durch unsere Inanspruchnahme entstandene Gebühren von
          74,10 Euro zu tragen. Bei Rückfragen oder Unklarheiten erwarten wir
          eine Kontaktaufnahme innerhalb von 24 Stunden. Um zusätzliche Kosten
          zu vermeiden, bitten wir Sie den ausstehenden Betrag auf unser
          Bankkonto zu überweisen.&nbsp;
          <br />
          <br />
          Falls wir bis zum genannten Datum keine Zahlung verbuchen, sehen wir
          uns gezwungen Ihren Mahnbescheid an ein Gericht abzugeben. Sämtliche
          damit verbundenen Kosten werden Sie tragen müssen.
          <br />
          <br />
          Mit freundlichen Grüßen
          <br />
          <br />
          Stellvertretender Rechtsanwalt Jamie Thurn
        </p>
      </div>
    );
  }
}

Mail29.defaultProps = {
  senderName: "Jamie Thurn",
  sender: "Jamie.Thurn@gmail.com",
  date: "June 5, 2020, 09:27",
  subject: "Aufforderung zur Zahlung",
  capital: "J",
  keyID: 29,
  avatarColor: "grey",
  unseen: true,
};

export default Mail29;
