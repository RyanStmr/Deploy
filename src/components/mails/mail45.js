import React, { Component } from "react";
import "./MailsDefault.css";

class Mail45 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Vizepr&auml;sident f&uuml;r den Bereich Studium BEWERBUNGSSTART
          F&Uuml;R DAS DEUTSCHLANDSTIPENDIUM DER LMU Liebe Studierende, die
          Ausbreitung des Corona-Virus trifft die Gesellschaft in allen
          Bereichen und die Auswirkungen sind weitreichend. Viele Studierende
          sind schwer getroffen und gegenseitige Unterst&uuml;tzung ist in
          diesen Zeiten wichtiger denn je. Zur Unterst&uuml;tzung der
          Studierenden kann auch in diesen Zeiten das Deutschlandstipendium
          beitragen. Die LMU f&ouml;rdert damit besonders begabte und engagierte
          Studierende. Neben guten Studienleistungen werden bei der Vergabe des
          Deutschlandstipendiums auch gesellschaftliches Engagement und
          besondere pers&ouml;nliche Leistungen ber&uuml;cksichtigt, zum
          Beispiel Migrations- oder Fluchthintergrund, die Herkunft aus einem
          nicht-akademischen Elternhaus, Krankheiten und
          Beeintr&auml;chtigungen, Bed&uuml;rftigkeit, die Betreuung eigener
          Kinder und studienbegleitende Erwerbst&auml;tigkeiten. Nutzen Sie
          dieses F&ouml;rderangebot und bewerben Sie sich zum Sommersemester
          2020 f&uuml;r ein Deutschlandstipendium der LMU. Es k&ouml;nnen
          insgesamt 255 Studierende mit einem Stipendium gef&ouml;rdert werden.
          Die F&ouml;rderung pro Stipendium betr&auml;gt 300 Euro pro Monat und
          wird je zur H&auml;lfte vom Bund und privaten F&ouml;rderern wie
          Unternehmen, Stiftungen, Vereinen und Alumni getragen. Das Stipendium
          ist unabh&auml;ngig von Ihrem sonstigen Einkommen oder das ihrer
          Eltern und wird nicht auf das BAf&ouml;G angerechnet. Bewerben um ein
          Stipendium k&ouml;nnen sich alle an der LMU immatrikulierten
          Studierenden ausschlie&szlig;lich online ab 09. April bis 23. April
          2020 unter www.lmu.de/deutschlandstipendium. Unter dieser Adresse
          finden Sie auch alle weiteren Informationen zum Stipendienprogramm und
          den Zugang zur Online-Bewerbung. Bei Fragen steht Ihnen das
          Deutschlandstipendium-Team per E-Mail unter
          deutschland-stipendium@lmu.de zur Verf&uuml;gung. Ich w&uuml;nsche
          Ihnen pers&ouml;nlich alles Gute und verbleibe mit besten
          Gr&uuml;&szlig;en Prof. Dr. Olaf Jahr Vizepr&auml;sident f&uuml;r den
          Bereich Studium ****************************** Diese Mail ging an
          mailto:O.Markova@campus.lmu.de Der Infodienst der LMU wird vom
          Pr&auml;sidium der LMU herausgegeben und von Kommunikation &amp;
          Presse redaktionell betreut. Die Inhalte m&uuml;ssen nicht der Meinung
          des Herausgebers entsprechen. Der Infodienst der LMU wird
          automatisiert verschickt. Wenn Sie Fragen zum Inhalt dieser Mail
          haben, wenden Sie sich an mailto:deutschland-stipendium@lmu.de Wenn
          Sie die Inhalte von Infodienst filtern oder an Ihren bisherigen
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

Mail45.defaultProps = {
  senderName: "Infodienst der LMU",
  sender: "infodienst@lmu.de",
  date: "July 12, 2020, 8:59",
  subject:
    " [Infodienst] Bewerbungsstart für das Deutschlandstipendium der LMU",
  capital: "I",
  keyID: 45,
  avatarColor: "green",
  unseen: true,
};

export default Mail45;
