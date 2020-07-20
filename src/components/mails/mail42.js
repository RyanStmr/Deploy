import React, { Component } from "react";
import "./MailsDefault.css";

class Mail42 extends Component {
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
              Vizepr&auml;sident f&uuml;r den Bereich Studium INFORMATIONEN ZUR
              &Ouml;FFNUNG DER LESES&Auml;LE Liebe Studierende, ich hoffe, Sie
              haben die Corona-bedingten Einschr&auml;nkungen und
              Herausforderungen der letzten Zeit gut &uuml;berstanden. Nach
              Lockerung der Beschr&auml;nkungen im sozialen Leben freue ich mich
              nun, Ihnen mitteilen zu d&uuml;rfen, dass auch eine teilweise
              &Ouml;ffnung der Leses&auml;le wieder m&ouml;glich wird. Ab dem 8.
              Juli stehen Angeh&ouml;rigen der LMU knapp 1.000 Lese- und
              Arbeitspl&auml;tze an ausgew&auml;hlten Standorten der
              Universit&auml;ts- und Juristischen Bibliothek wieder zur
              Verf&uuml;gung. Aufgrund der strengen Hygienevorschriften ist die
              Anzahl der Arbeitspl&auml;tze begrenzt. Eine vorherige
              Reservierung eines Arbeitsplatzes &uuml;ber ein
              Online-Buchungssystem ist deshalb notwendig. Weitere Infos zu den
              einzelnen Bibliotheken und zur Online-Reservierung finden Sie auf
              der Webseite der Universit&auml;tsbibliothek, ebenso wie
              umfangreiche FAQ zur Bibliotheksbenutzung w&auml;hrend der
              COVID-19-Pandemie auf der Webseite der UB. Ich w&uuml;nsche Ihnen
              viel Erfolg, ich hoffe, Sie k&ouml;nnen Ihr Sommersemester
              erfolgreich beenden, und verbleibe mit besten Gr&uuml;&szlig;en
              Prof. Dr. Olaf Jahr Vizepr&auml;sident f&uuml;r den Bereich
              Studium ****************************** Diese Mail ging an
              mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
              Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
              Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der
              Meinung des Herausgebers entsprechen. Der Infodienst der LMU wird
              automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
              haben, wenden Sie sich an mailto:praesidium@lmu.de Wenn Sie die
              Inhalte von Infodienst filtern oder an Ihren bisherigen
              Einstellungen &Auml;nderungen vornehmen m&ouml;chten, folgen Sie
              bitte diesem Link:
              https://www.portal.uni-muenchen.de/benutzerkonto/ Wenn Sie
              generelle Fragen zum Infodienst der LMU haben, wenden Sie sich
              bitte an mailto:infodienst@lmu.de ******************************
              Herausgeber: Pr&auml;sidium der
              Ludwig-Maximilians-Universit&auml;t (LMU) M&uuml;nchen
              Redaktionelle Betreuung: Kommunikation &amp; Presse
              Geschwister-Scholl-Platz 1 80539 M&uuml;nchen Tel.: 089 /
              2180-3423 E-Mail: mailto:infodienst@lmu.de
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail42.defaultProps = {
  senderName: "LMU",
  sender: "infodienst@lmu.de",
  date: "July 6, 2020, 08:12",
  subject: " [Infodienst] Informationen zur Öffnung der Lesesäle ",
  capital: "I",
  keyID: 42,
  avatarColor: "green",
};

export default Mail42;
