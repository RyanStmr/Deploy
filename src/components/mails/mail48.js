import React, { Component } from "react";
import "./MailsDefault.css";

class Mail48 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Studentenkanzlei NEUE LMUCARD / NEW LMUCARD Liebe Studierende, NEU!
          Bitte beachten Sie: nach der erfolgten R&uuml;ckmeldung zum
          Wintersemester 2019/20 erhalten Sie erstmals KEINE Studienpapiere mehr
          postalisch zugeschickt. Immatrikulationsbescheinigungen erhalten Sie
          k&uuml;nftig nur noch Online &uuml;ber das Selbstbedienungsportal oder
          pers&ouml;nlich in der Studentenkanzlei. Vergessen Sie auch nicht,
          nach erfolgter R&uuml;ckmeldung Ihre LMUcard zu validieren, die als
          Studierendenausweis dient. Falls Sie noch keine LMUcard besitzen,
          besorgen Sie sich diese bitte UMGEHEND! Infos zur Beantragung der
          LMUcard
          (https://www.it-servicedesk.uni-muenchen.de/lmucard/index.html) Ihre
          Studentenkanzlei Dear Students, NEW! Please note: After your
          continuation of registration for the Winter Semester 2019/20 gets
          approved, for the first time ever your official student documents will
          NOT be sent to you by postal mail. From now on you will receive your
          registration certificates only via the online self-service portal or
          in person at the Office of the University Registrar. Please also
          remember to validate your LMUcard after your continuation of
          registration gets approved since it serves as your student identity
          card as well. In case you still do not own an LMUcard, please obtain
          one IMMEDIATELY. Information on how to apply for the
          LMUcard.(https://www.it-servicedesk.uni-muenchen.de/lmucard/en/index.html).
          Your Office of the University Registrar ******************************
          Diese Mail ging an mailto:O.Markova@campus.lmu.de Der Infodienst der
          LMU wird vom Pr&auml;sidium der LMU herausgegeben und von
          Kommunikation &amp; Presse redaktionell betreut. Die Inhalte
          m&uuml;ssen nicht der Meinung des Herausgebers entsprechen. Der
          Infodienst der LMU wird automatisiert verschickt. Wenn Sie Fragen zum
          Inhalt dieser Mail haben, wenden Sie sich an
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

Mail48.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "June 12, 2020, 3:22",
  subject: "[Infodienst] Neue LMUcard / New LMUcard",
  capital: "I",
  keyID: 48,
  avatarColor: "green",
  unseen: true,
};

export default Mail48;
