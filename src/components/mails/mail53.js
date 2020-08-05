import React, { Component } from "react";
import "./MailsDefault.css";

class Mail53 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Vizepr&auml;sident Dr. Christoph M&uuml;lke DIGITALISIERTE MATERIALIEN
          UND &sect; 52a UrhG: AKTUELLE INFORMATIONEN Sehr geehrte Damen und
          Herren, wie wir soeben aus unserem Ministerium erfahren haben, soll in
          der kommenden Woche eine Grundsatzvereinbarung zwischen
          Hochschulrektorenkonferenz (HRK), Kultusministerkonferenz (KMK) und VG
          Wort zur k&uuml;nftigen Nutzung von urheberrechtlich gesch&uuml;tzten
          Werken nach &sect; 52a des Urheberrechtsgesetzes (UrhG) unterzeichnet
          werden. Das Ministerium empfiehlt, bereits jetzt das L&ouml;schen
          entsprechender Materialien vor&uuml;bergehend einzustellen. Diese
          Empfehlung haben wir soeben an die Fakult&auml;ten sowie
          Professorinnen und Professoren weitergegeben. &Uuml;ber die weitere
          Entwicklung werden wir Sie selbstverst&auml;ndlich in der kommenden
          Woche laufend auf der LMU-Homepage und ggf. auch per Mail informieren.
          Weitere Informationen unter www.lmu.de/aktuelles/vgwort Mit
          freundlichen Gr&uuml;&szlig;en Dr. Christoph M&uulch;lke
          Vizepr&auml;sident ****************************** Diese Mail ging an
          mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
          Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
          Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der Meinung
          des Herausgebers entsprechen. Der Infodienst der LMU wird
          automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
          haben, wenden Sie sich an mailto:presse@lmu.de Wenn Sie die Inhalte
          von Infodienst filtern oder an Ihren bisherigen Einstellungen
          &Auml;nderungen vornehmen m&ouml;chten, folgen Sie bitte diesem Link:
          http://www.portal.lmu.de/benutzerkonto Wenn Sie generelle Fragen zum
          Infodienst der LMU haben, wenden Sie sich bitte an
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

Mail53.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "June 22, 2020, 05:51",
  subject:
    " [Infodienst] Digitalisierte Materialien und § 52a UrhG: Aktuelle Informationen",
  capital: "I",
  keyID: 53,
  avatarColor: "green",
  unseen: true,
};

export default Mail53;
