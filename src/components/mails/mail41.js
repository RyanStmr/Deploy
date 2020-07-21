import React, { Component } from "react";
import "./MailsDefault.css";

class Mail41 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <p>
              Hallo Studierende, wir planen die Erstklausur in FSK als
              Pr&auml;senzklausur am 11.08.2020 zwischen 8:00 und 14:00 Uhr. Die
              Klausur dauert nat&uuml;rlich nicht volle 6 Stunden, sondern nur
              etwa 2 Stunden. Den genauen Zeit- und Raumplan arbeiten wir noch
              aus. Daf&uuml;r gibt es jetzt eine Anmeldung &uuml;ber Uni2Work:
              https://uni2work.ifi.lmu.de/course/S20/IfI/fsk/exams/Erstklausur%20%28Pr%C3%A4senzklausur%29/show
              F&uuml;r unsere Organisation ist es sinnvoll, sich nur dann
              anzumelden, wenn man auch tats&auml;chlich zur Klausur erscheinen
              will. Bitte beachtet, dass der An- und Abmeldezeitraum bereits am
              26.07.2020 endet. Viele Gr&uuml;&szlig;e, Karlheinz Flenz
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail41.defaultProps = {
  senderName: "Karlheinz Flenz",
  sender: "k.flenz@lmu.de",
  date: "July 8, 2020, 12:40",
  subject: "S20 - IfI - fsk : Klausuranmeldung zur Erstklausur",
  capital: "F",
  keyID: 41,
  avatarColor: "black",
  unseen: true,
};

export default Mail41;
