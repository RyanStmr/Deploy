import React, { Component } from "react";
import "./MailsDefault.css";

class Mail50 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Studentenkanzlei ZAHLUNGSFRIST F&Uuml;R R&Uuml;CKMELDER IN DAS
          SOMMERSEMESTER 2020 Sehr geehrte Studierende, wir m&ouml;chten Sie
          daran erinnern, dass am 15. Februar 2020 die Zahlungsfrist f&uuml;r
          die R&uuml;ckmeldung f&uuml;r das Sommersemester 2017 endet. Wenn Sie
          die Beitr&auml;ge f&uuml;r das Sommersemester 2020 bereits
          &uuml;berwiesen oder sich bewusst nicht r&uuml;ckgemeldet haben,
          betrachten Sie diese E-Mail bitte als gegenstandslos. Alle notwendigen
          Informationen f&uuml;r die R&uuml;ckmeldung f&uuml;r das
          Sommersemester 2017 finden Sie unter: www.lmu.de/rueckmeldung Ihr
          pers&ouml;nliches Online-Beitragskonto k&ouml;nnen Sie
          &uuml;berpr&uuml;fen unter: www.lmu.de/stud-online Bitte beachten Sie:
          Diese E-Mail wurde automatisch generiert, klicken Sie bitte daher
          nicht auf &bdquo;Reply&ldquo; oder &bdquo;Antworten&ldquo; in Ihrem
          E-Mail-Programm! Sollten Sie Fragen zur R&uuml;ckmeldung haben, wenden
          Sie sich bitte an unseren Studien-Informations-Service (SIS) unter der
          Telefonnummer +49 (89) 2180-9000. Wir w&uuml;nschen Ihnen ein
          erfolgreiches Semester, Ihre Studentenkanzlei Dear students, We would
          like to remind you that February 15, 2020 marks the deadline for your
          payment regarding your continued registration for the Summer Semester
          2020. In case you have already made your payment for the Summer
          Semester 2020 or you have deliberately chosen not to continue your
          registration, please disregard this email. Please refer to our website
          www.lmu.de/rueckmeldung for all the necessary information regarding
          your continued registration for the Summer Semester 2020. You may
          check your Online-Beitragskonto (to view your account balance) at
          www.de/stud-online. Please note: This email has been generated
          automatically. Therefore, please do not click on
          &#39;&#39;reply&#39;&#39; or &#39;&#39;answer&#39;&#39; in your email
          program. For any further questions on your continued registration,
          please call our Student-Information-Service (SIS) at +49 (0)89
          2180-9000. We wish you all the best for a successful semester, Your
          Office of the Registrar ****************************** Diese Mail ging
          an mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
          Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
          Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der Meinung
          des Herausgebers entsprechen. Der Infodienst der LMU wird
          automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
          haben, wenden Sie sich an
          mailto:noreply.studentenkanzlei@verwaltung.uni-muenchen.de Wenn Sie
          die Inhalte von Infodienst filtern oder an Ihren bisherigen
          Einstellungen &Auml;nderungen vornehmen m&ouml;chten, folgen Sie bitte
          diesem Link: http://www.portal.lmu.de/benutzerkonto Wenn Sie generelle
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

Mail50.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "February 01, 2020, 9:00",
  subject:
    "[Infodienst] Zahlungsfrist für Rückmelder in das Sommersemester 2020",
  capital: "I",
  keyID: 50,
  avatarColor: "green",
  unseen: true,
};

export default Mail50;
