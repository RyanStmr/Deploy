import React, { Component } from "react";
import "./MailsDefault.css";

class Mail56 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Sehr geehrte/r Mieter/in, aufgrund eines Wasserschadens m&uuml;ssen
          wir leider unangek&uuml;ndigt Ihre Zimmer betreten um die Ursache zu
          finden. Unsere Hausmeister werden selbstverst&auml;ndlich einen
          Betretungszettel in den Zimmern hinterlassen die sie betreten haben.
          Sollte Ihnen ein Wasserschaden aufgefallen sein wenden Sie sich bitte
          umgehend an unseren Hausmeister Herr Kasser unter der Nummer 0175/29
          05 714. Wir entschuldigen uns f&uuml;r die kurzfristige
          Ma&szlig;nahme. Mit freundlichen Gr&uuml;&szlig;en i.A Heike Helmut
          Technische Sachbearbeiterin Studentenwerk M&uuml;nchen
        </p>
      </div>
    );
  }
}

Mail56.defaultProps = {
  senderName: "Heike Helmut",
  sender: "heike.helmut@stwm.de",
  date: "July 15, 2020, 5:58",
  subject: " 720 Dringend: Betreten der Zimmer aufgrund eines Wasserschadens",
  capital: "H",
  keyID: 0,
  avatarColor: "xxxx",
  unseen: true,
};

export default Mail56;
