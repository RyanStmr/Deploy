import React, { Component } from "react";
import "./MailsDefault.css";

class Mail44 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          tudent und Arbeitsmarkt BEWERBUNGSTRAINING Liebe Studierende, der
          Career Service der LMU bietet Ihnen n&auml;chste Woche ein
          zweit&auml;giges interaktives Bewerbungstraining an, Kosten: 50 Euro,
          Anmeldung und Info unter:
          https://www.s-a.uni-muenchen.de/studierende/kurse-sozialkompetenzen/rs-wf20201/bewerbung/index.html
          Freundliche Gr&uuml;&szlig;e Gertrude Webber Student und Arbeitsmarkt
          Career Service der LMU M&uuml;nchen www.s-a.lmu.de Mail:
          kurse.s-a@lmu.de ****************************** Diese Mail ging an
          mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
          Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
          Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der Meinung
          des Herausgebers entsprechen. Der Infodienst der LMU wird
          automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
          haben, wenden Sie sich an mailto:kurse.s-a@lmu.de Wenn Sie die Inhalte
          von Infodienst filtern oder an Ihren bisherigen Einstellungen
          &Auml;nderungen vornehmen m&ouml;chten, folgen Sie bitte diesem Link:
          https://www.portal.uni-muenchen.de/benutzerkonto/ Wenn Sie generelle
          Fragen zum Infodienst der LMU haben, wenden Sie sich bitte an
          mailto:infodienst@lmu.de ****************************** Herausgeber:
          Pr&auml;sidium der Ludwig-Maximilians-Universit&auml;t (LMU)
          M&uuml;nchen Redaktionelle Betreuung: Kommunikation &amp; Presse
          Geschwister-Scholl-Platz 1 80539 M&uuml;nchen Tel.: 089 / 2180-3423
          E-Mail: mailto:infodienst@lmu.de
        </p>
      </div>
    );
  }
}

Mail44.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "June 23, 2020, 7:15",
  subject: " [Infodienst] Bewerbungstraining",
  capital: "L",
  keyID: 44,
  avatarColor: "green",
  unseen: true,
};

export default Mail44;
