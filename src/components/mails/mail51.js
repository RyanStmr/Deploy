import React, { Component } from "react";
import "./MailsDefault.css";

class Mail51 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Hochschulleitung der LMU Die Hochschulleitung bittet, die nachstehende
          Umfrage der Studierendenvertretungen s&auml;mtlicher M&uuml;nchener
          Hochschulen, die im Interesse aller Studierenden erfolgt, zu beachten.
          ---------------------------------------------------------------------------------
          SEMESTERTICKET - UMFRAGE / SURVEY Liebe Kommilitoninnen und
          Kommilitonen, zur langfristigen Fortf&uuml;hrung des Semestertickets
          ab dem Sommersemester 2020 verhandeln aktuell das Studentenwerk
          M&uuml;nchen und wir Studierende mit dem M&uuml;nchener Verkehrs- und
          Tarifverbund sowie den Verkehrsunternehmen MVG, S-Bahn und BOB. Dabei
          geht es um Preise und Konditionen f&uuml;r die n&auml;chsten Jahre.
          Hierf&uuml;r ist uns Eure Meinung wichtig! Egal, ob Ihr in einer
          nachfolgenden Abstimmung f&uuml;r oder gegen die Fortf&uuml;hrung des
          Semestertickets stimmen w&uuml;rdet, ob Ihr Euch gerade in
          M&uuml;nchen aufhaltet oder nicht. Je besser wir Eure Vorstellungen
          und Einsch&auml;tzungen kennen, desto besser ist unsere
          Argumentations- und Verhandlungsbasis. Unterst&uuml;tzt uns beim
          Aushandeln der bestm&ouml;glichen Konditionen, und nehmt Euch ein paar
          Minuten Zeit f&uuml;r diese Umfrage:
          https://umfrage.semesterticket-muenchen.de/?lang=de Die Umfrage
          l&auml;uft nur wenige Tage bis zum Samstag, den 3. September um 12:00
          Uhr. Vielen Dank f&uuml;r Eure Mithilfe und viele Gr&uuml;&szlig;e
          Eure Studierendenvertretung (AK Mobilit&auml;t)
          ---------------------------------------------------------------------------------
          Dear fellow students, to ensure a long term continuation of the
          Semesterticket starting from the 2020 summer term, the Munich Student
          Union (Studentenwerk M&uuml;nchen) and student representatives are in
          negotiations with the Munich transportation and tarif organization
          (MVV) as well as with the Transport Authorities MVG, S-Bahn and BOB.
          Therefore your opinion is important! Regardless of whether you would
          vote for or against the continuation of the Semester Ticket and
          regardless of if you are in Munich right now or not. The more we know
          about your expectations, the better our argumentation and negotiation
          stand point is. Please support our effort negotiating the best
          possible terms for the Semester Ticket and take a few minutes time for
          this survey: https://umfrage.semesterticket-muenchen.de/?lang=en The
          survey will only run for a few days until Saturday the 3. September,
          12:00 pm. Thank you for your participation! Kind regards Your student
          representation (Mobility Committee) ******************************
          Diese Mail ging an mailto:O.Markova@campus.lmu.de Der Infodienst der
          LMU wird vom Pr&auml;sidium der LMU herausgegeben und von
          Kommunikation &amp; Presse redaktionell betreut. Die Inhalte
          m&uuml;ssen nicht der Meinung des Herausgebers entsprechen. Der
          Infodienst der LMU wird automatisiert verschickt. Wenn Sie Fragen zum
          Inhalt dieser Mail haben, wenden Sie sich an
          mailto:geschaeftsfuehrung@stuve.uni-muenchen.de Wenn Sie die Inhalte
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

Mail51.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "July 03, 2020, 9:11",
  subject: "[Infodienst] Semesterticket - Umfrage / Survey",
  capital: "I",
  keyID: 51,
  avatarColor: "green",
  unseen: true,
};

export default Mail51;
