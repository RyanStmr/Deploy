import React, { Component } from "react";
import "./MailsDefault.css";

class Mail38 extends Component {
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
              Sehr geehrte Bewohnerinnen und Bewohner, da Ihr Vertrag
              demn&auml;chst endet, erhalten Sie anbei die wichtigsten
              Informationen, welche Ihren Auszug betreffen. Bitte lesen Sie sich
              den Anhang aufmerksam durch, um sicher zu gehen, dass es
              sp&auml;ter keinen Abzug bei der Mietkaution gibt. ACHTUNG!!! Wenn
              Sie nach Ihrem Auszug Deutschland verlassen oder wenn sich Ihre
              Kontoverbindung &auml;ndert, bitten wir Sie, beiliegendes
              Formblatt zur ?&Uuml;berweisung der Kaution? auszuf&uuml;llen und
              unserer Verwaltungsstelle zuzusenden oder dort abzugeben. Die
              Kautionsabrechnung erfolgt ca. drei bis vier Monate nach Auszug.
              Wir behalten uns das Recht vor (laut Mietvertrag &sect; 5
              Mietsicherheit), einen Teil der Kaution (100 EUR) einzubehalten.
              Die Betriebskosten (laut Mietvertrag &sect; 4 ff.) werden zu einem
              sp&auml;teren Zeitpunkt abgerechnet. Diese werden mit der
              einbehaltenen Kaution in H&ouml;he von 100 EUR verrechnet und ggf.
              in Rechnung gestellt. Eine eventuelle Gutschrift werden wir Ihnen
              zum entsprechenden Zeitpunkt &uuml;berweisen. Sollte der
              Nachforderungsbetrag der Betriebskostenabrechnung den Betrag von
              100 EUR &uuml;bersteigen, werden wir Ihnen dies in Rechnung
              stellen. Aus diesem Grund bitten wir Sie, uns auch eine neue
              Adresse mitzuteilen. Mit freundlichen Gr&uuml;&szlig;en Ihre
              Hausverwaltung Studentisches Wohnen
              -------------------------------------------- Dear Students, you
              contract ends soon. Enclosed you&#39;ll find the most important
              information which concerns your moving out. Please read the
              attachment attentive, that you will receive the payment in full.
              ATTENTION!!! If you leave Germany after your end of contract, or
              you have changed your bank account, please fill in the form
              ?&Uuml;berweisung der Kaution?. You can hand it to the responsible
              administration office or send it via email. So we are going to
              transfer the deposit to the correct account. The deposit will be
              billing three or four months after the end of contract and
              transfered to the last known account. We will send the settlement
              of your room 3 or 4 month after moveng out. We have the right to
              withhold a part of the deposit ? EUR 100 (&sect; 5
              Mietsicherheit). If your room is in a good condition, we will
              transfer the rest deposit to the known account. The utility bill
              will be calculated at a later time (&sect; 4 ff). We will settle
              the withhold amount of EUR 100 with the operating costs. You will
              receive a bill, if the operating costs are over EUR 100. Otherwise
              you will receive the amount (after calculating the running costs)
              back. When you have a balance/credit, we will transfer the deposit
              and the balance to your bank account. Best regardes, Ihre
              Hausverwaltung Studentisches Wohnen
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail38.defaultProps = {
  senderName: "STWM",
  sender: "wohnen-vertrag@stwm.de",
  date: "Mai 23, 2020, 02:37",
  subject: "Mietvertrag",
  capital: "S",
  keyID: 38,
  avatarColor: "blue",
  unseen: true,
};

export default Mail38;
