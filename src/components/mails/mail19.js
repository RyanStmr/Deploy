import React, { Component } from "react";
import "./MailsDefault.css";

class Mail19 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>LMU University Library </p>
        <p> Lieber Mitarbeiter/Student</p>
        <p>
          {" "}
          Diese Nachricht informiert Sie darüber, dass Ihr Zugriff auf das
          Bibliothekskonto bald abläuft. Sie müssen sich in Ihrem Konto
          anmelden, um weiterhin auf diesen Dienst zugreifen zu können. Klicken
          Sie dazu auf die unten stehende Webadresse oder kopieren Sie sie und
          fügen Sie sie in Ihren Webbrowser ein.
        </p>
        <p>
          Eine erfolgreiche Anmeldung aktiviert Ihr Konto und Sie werden zum
          Bibliotheksprofil weitergeleitet..
        </p>
        <p>Mein Bibliothekskonto (LINK entfernt)</p>
        <p>
          Wenn Sie sich nicht einloggen können, wenden Sie sich bitte an Ruth
          Jenkins unter *LINK Entfernt* für sofortige Hilfe.&nbsp;
        </p>
        <p>
          {" "}
          &nbsp;Wenn Sie Fragen haben, überprüfen Sie bitte anhand der folgenden
          Liste die betreffende Bibliothek: *LINK entfernt* Sie können die
          Feinsteuerungsrichtlinien der Bibliothek unter anzeigen *LINK
          entfernt*&nbsp;
        </p>
        <p>
          <b>Hauptbibliothek</b>
        </p>
        <p>
          The University LMU is a charitable body, with registration number
          SC014336.&nbsp;
        </p>
      </div>
    );
  }
}

Mail19.defaultProps = {
  senderName: "LMU Bibliothek",
  sender: "bibliothek@campus.lmu.de",
  date: "June 11, 2020, 03:15",
  subject: "Ablauf des Bibliothekskontos",
  capital: "L",
  keyID: 19,
  avatarColor: "green",
};

export default Mail19;
