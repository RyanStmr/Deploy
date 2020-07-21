import React, { Component } from "react";
import "./MailsDefault.css";

class Mail39 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText} style={{ fontSize: "12px" }}>
        <p>
          Sehr geehrte Bewohnerin, Sehr geehrter Bewohner, / Dear tenant, Ihr
          Mietvertrag ist befristet abgeschlossen und l&auml;uft zum 30
          September ab. / Your tenancy agreement was concluded for a fixed term
          and expires on the 30th of September . Verl&auml;ngerungen der
          Wohnzeit sind nur in wenigen Ausnahmef&auml;llen und entsprechend den
          beigef&uuml;gten Richtlinien f&uuml;r Wohnzeitverl&auml;ngerung
          m&ouml;glich. Wenden Sie sich bitte in einem solchen Fall an die
          f&uuml;r Sie zust&auml;ndige Verwaltungsstelle. / Extensions of the
          residency period are only possible in a few exceptional cases and in
          accordance with the attached regulations governing prolongation of the
          residency period. Regarding the latter case, please contact the
          administrative office which responsible for you. Bitte beantragen Sie
          die Wohnzeitverl&auml;ngerung auf dem beigef&uuml;gten Formblatt bis
          zum 15. Juni. Bitte beachten Sie, dass wir nach Fristablauf keine
          Verl&auml;ngerungsantr&auml;ge mehr annehmen werden. / Please use the
          attached form to apply for a prolongation of the residency period and
          submit it no later than the 15th of June. Please note that we
          won&#39;t accept applications after the deadline. Ein
          R&auml;umungsschutz muss ebenfalls bis zum 15.06.2020 beantragt
          werden. Hierf&uuml;r einfach einen formlosen Antrag mit
          Begr&uuml;ndung, wieso Dieser noch ben&ouml;tigt wird schreiben. Dear
          students, when you have some questions please come into our office, we
          can talk about it but latest june 15th, 2020. Der Antrag auf
          Wohnzeitverl&auml;ngerung kann per E-Mail oder gerne pers&ouml;nlich
          in der Verwaltungsstelle abgegeben werden. / The application for a
          prolongation of the residency period can be submitted by email or by
          your own in administration office. Diese
          Verl&auml;ngerungsm&ouml;glichkeit besteht nicht f&uuml;r Studierende,
          die &uuml;ber eine Sonderbelegung (z.B. Stipendienprogramme,
          Austauschprogramme oder Servicepaket) eingezogen sind und einen auf
          ein oder zwei Semester befristeten Mietvertrag haben. / This
          prolongation option does not exist for students who moved into the
          residency facility through a special occupancy status (e.g.
          scholarship, grant or fellowship programs, exchange programs, or
          service package) and have a tenancy agreement limited to one or two
          semesters. Noch ein Hinweis: Vergessen Sie bitte nicht, sich bei der
          Meldebeh&ouml;rde nach dem Auszug abzumelden. / Note: please do not
          forget to deregister at the local residents registration office. Mit
          freundlichen Gr&uuml;&szlig;en / With kind regards, i.A. Beathe
          Schuller Beathe Schuller Studentenwerk M&uuml;nchen Anstalt des
          &ouml;ffentlichen Rechts Studentisches Wohnen Verwaltungsstelle Agnes/
          Adelheidstra&szlig;e 13 80798 M&uuml;nchen Tel.: +49 89 278143 - 11
          Fax.: +49 89 278143 - 15 Email: beathe.schuller@stwm.de
          www.studentenwerk-muenchen.de
        </p>
      </div>
    );
  }
}

Mail39.defaultProps = {
  senderName: "Beathe Schuller",
  sender: "beathe.schuller@stwm.de",
  date: "April 13, 2020, 07:39",
  subject: "Mietvertrag",
  capital: "B",
  keyID: 39,
  avatarColor: "blue",
  unseen: true,
};

export default Mail39;
