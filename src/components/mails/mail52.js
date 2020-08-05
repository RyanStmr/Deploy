import React, { Component } from "react";
import "./MailsDefault.css";

class Mail52 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Hochschulleitung der LMU KOOPERATION MIT DRIVENOW: KOSTENLOSE
          REGISTRIERUNG F&Uuml;R LMU-MITGLIEDER Liebe Studierende, ich
          m&ouml;chte Sie auf folgendes Angebot aufmerksam machen. Die LMU hat
          2014 eine Kooperation mit dem Carsharing-Anbieter DriveNow
          geschlossen: In den n&auml;chsten Tagen ist DriveNow an
          unterschiedlichen Standorten der LMU vor Ort und Sie k&ouml;nnen sich
          dort kostenlos online bei DriveNow registrieren. Wir wollen durch
          diese Kooperation die Mobilit&auml;t unserer Studierenden und
          Mitarbeiterinnen und Mitarbeiter f&ouml;rdern. Deshalb hatten wir mit
          DriveNow eine Erweiterung des Gesch&auml;ftsgebietes auf den Campus
          Gro&szlig;hadern und Martinsried vereinbart, die schon jetzt sehr
          erfolgreich ist. Ein weiterer Vorteil f&uuml;r Sie als LMU-Mitglied
          ist, dass sie sich die Registrierungsgeb&uuml;hr von 29 Euro sparen.
          Kostenlose Registrierung, Termine und Erkl&auml;rung zur DriveNow
          Gesch&auml;ftsgebieterweiterung:
          http://www.uni-muenchen.de/kooperationen/partnerangebote/index.html
          Mit freundlichen Gr&uuml;&szlig;en Sigmund Steiner Vizepr&auml;sident
          ****************************** Diese Mail ging an
          mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
          Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
          Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der Meinung
          des Herausgebers entsprechen. Der Infodienst der LMU wird
          automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
          haben, wenden Sie sich an mailto:partnerangebote@lmu.de Wenn Sie die
          Inhalte von Infodienst filtern oder an Ihren bisherigen Einstellungen
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

Mail52.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "June 29, 2020, 8:15",
  subject:
    "[Infodienst] Kooperation mit DriveNow: Kostenlose Registrierung für LMU-Mitglieder",
  capital: "I",
  keyID: 52,
  avatarColor: "green",
  unseen: true,
};

export default Mail52;
