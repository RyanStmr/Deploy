import React, { Component } from "react";
import "./MailsDefault.css";

class Mail49 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Dezernat Studierende GESETZLICHE &Auml;NDERUNG: NACHERFASSUNG VON
          DATEN / REQUEST FOR ADDITIONAL DATA Sehr geehrte Studierende, dear LMU
          student, das Hochschulstatistikgesetz verpflichtet die
          Universit&auml;t, von ihren Studierenden bestimmte Daten zu erfassen.
          Die meisten dieser Daten wurden bereits bei Ihrer Immatrikulation
          erhoben. Durch eine &Auml;nderung des Gesetzes sind ab dem
          Sommersemester 2020 aber einige zus&auml;tzliche Angaben zu erfassen.
          Um die Nacherfassung f&uuml;r Sie m&ouml;glichst einfach zu gestalten,
          haben wir ein Online-Formular vorbereitet. Und so funktioniert es: 1.
          Eine Verlinkung zu dem Online-Formular finden Sie auf
          http://www.uni-muenchen.de/studium/studium_aktuell/neuigkeiten/studkanz/system.html
          bei den Online-Selbstbedienungsfunktionen, Men&uuml;punkt
          &bdquo;Nacherfassung von Daten&ldquo;. Wie bei allen
          Online-Selbstbedienungsfunktionen nutzen Sie zum &Ouml;ffnen Ihre
          LMU-Benutzerkennung, die Sie bei der Immatrikulation erhielten.
          Sollten Sie diese verloren haben, wenden Sie sich bitte zun&auml;chst
          an unseren IT-Servicedesk
          https://www.it-servicedesk.uni-muenchen.de/kontakt/index.html 2.
          Sobald Sie &bdquo;Nacherfassung von Daten&ldquo; ge&ouml;ffnet haben,
          gehen Sie bitte auf den Men&uuml;punkt &bdquo;Angaben zur amtlichen
          Statistik&ldquo;. In der Erfassungsmaske gehen Sie entsprechend der
          dortigen Anleitung vor. Wenn keine Angaben oder Korrekturen
          vor-eingestellter Angaben erforderlich sind, klicken Sie am Ende des
          Formulars trotzdem auf &bdquo;Hiermit best&auml;tige ich die
          Richtigkeit...&ldquo; und speichern das Formular ab. Sollte es Fragen
          geben, die sich nicht aus dem Formular und den Hilfe-Texten
          beantworten, wenden Sie sich bitte an den Studien-Informations-Service
          (SIS). Sie erreichen ihn unter 089/2180-9000. Helfen Sie sich bitte
          auch untereinander, insbesondere Ihren noch wenig Deutsch sprechenden
          Kommilitoninnen und Kommilitonen. Bitte bearbeiten Sie das Formular
          bis zum 15. Mai 2020. Im Voraus vielen Dank f&uuml;r Ihre Mitwirkung.
          Dear LMU student, LMU is obliged by law to collect defined data about
          its students. Most of these have been collected during enrolment. Due
          to a change of the law there are some additional questions we have to
          ask you. To keep this as simple as possible, we have prepared an
          online form. You can find a link to this form here
          http://www.uni-muenchen.de/studium/studium_aktuell/neuigkeiten/studkanz/system.html
          button{" "}
          <nacherfassung daten="" von="">
            {" "}
            To open the form, please use your account for LMU online services
            that you received during your enrolment. If you have lost your
            password, please contact
            https://www.it-servicedesk.uni-muenchen.de/kontakt/index.html Having
            opened{" "}
            <nacherfassung daten="" von="">
              , please move to{" "}
              <angaben amtlichen="" statistik="" zur="">
                . You will find the necessary instructions in the online form.
                To finish, please click{" "}
                <speichern>
                  . If you need help, contact SIS under 089/2180-9000. Please be
                  sure to look up the online form by 15th of May, 2020. Mit
                  freundlichen Gr&uuml;&szlig;en/Best regards, Stefan C. Conrad
                  Leiter Dezernat Studierende ******************************
                  Diese Mail ging an mailto:O.Markova@campus.lmu.de Der
                  Infodienst der LMU wird vom Pr&auml;sidium der LMU
                  herausgegeben und von Kommunikation &amp; Presse redaktionell
                  betreut. Die Inhalte m&uuml;ssen nicht der Meinung des
                  Herausgebers entsprechen. Der Infodienst der LMU wird
                  automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser
                  Mail haben, wenden Sie sich an
                  mailto:HISSOS.Nacherfassung@verwaltung.uni-muenchen.de Wenn
                  Sie die Inhalte von Infodienst filtern oder an Ihren
                  bisherigen Einstellungen &Auml;nderungen vornehmen
                  m&ouml;chten, folgen Sie bitte diesem Link:
                  http://www.portal.lmu.de/benutzerkonto Wenn Sie generelle
                  Fragen zum Infodienst der LMU haben, wenden Sie sich bitte an
                  mailto:infodienst@lmu.de ******************************
                  Herausgeber: Pr&auml;sidium der
                  Ludwig-Maximilians-Universit&auml;t (LMU) M&uuml;nchen
                  Redaktionelle Betreuung: Kommunikation &amp; Presse
                  Geschwister-Scholl-Platz 1 80539 M&uuml;nchen Tel.: 089 /
                  2180-3423 E-Mail: mailto:infodienst@lmu.de
                </speichern>
              </angaben>
            </nacherfassung>
          </nacherfassung>
        </p>
      </div>
    );
  }
}

Mail49.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "Mai 01, 2020, 3:41",
  subject:
    " [Infodienst] Gesetzliche Änderung: Nacherfassung von Daten / Request for additional Data",
  capital: "I",
  keyID: 49,
  avatarColor: "green",
  unseen: true,
};

export default Mail49;
