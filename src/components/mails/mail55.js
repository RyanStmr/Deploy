import React, { Component } from "react";
import "./MailsDefault.css";

class Mail55 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Sehr geehrte Bewohnerinnen, sehr geehrter Bewohner, / Dear residents,
          Sie haben mit dem Studentenwerk M&uuml;nchen einen befristeten
          Mietvertrag. / You have a fixed-term tenancy agreement with the
          Studentenwerk M&uuml;nchen. Nach den Bewilligungsrichtlinien f&uuml;r
          den Wohnheimbau und nach &sect; 1 Ziff. 4.2 Ihres Mietvertrages, sind
          Sie verpflichtet uns bis 01.11. f&uuml;r das Wintersemester bzw. bis
          01.05. f&uuml;r das Sommersemester eine Immatrikulationbescheinigung
          vorzulegen. / According to the guidelines for student accommodation
          and your tenancy agreement &sect; 1 Ziff. 4.2, you are obligated to
          send us your certificate of enrollment for winter term till 1st of
          November and for summer term till 1st of May. Gerne erinnern wir Sie
          daran und bitten Sie, Ihre Immatrikulationsbescheinigung unter
          folgenden Link hochzulanden: / This is why we remind you on this
          subject, and ask you to upload your certificate of enrollment under
          the following link:
          http://ipack.studentenwerk-muenchen.de/ipack3/#maintenance/login Die
          ben&ouml;tigten Daten zum einloggen finden Sie im Anhang dieser
          E-Mail. / The dates, which you need for uploading your certificat of
          enrolment, you can find enclosed. Bitte denken Sie daran, dass eine
          Nichtabgabe der Immatrikulationsbescheinigung mit vertragsrechtlichen
          Konsequenzen verbunden ist und somit zu einer K&uuml;ndigung des
          Mietverh&auml;ltnisses f&uuml;hren kann. / Please remember that not
          handing in your certificate of enrolment can have consequences on your
          rental agreement and we can terminate the tenancy agreement.
          ACHTUNG!!! Um den Eingang und den Bearbeitungsstand Ihrer
          Immatrikulationsbescheiniung zu &uuml;berp&uuml;fen, k&ouml;nnen Sie
          sich mehrmals mit den im Anhang genannten Daten einloggen. Eine
          gesonderte Best&auml;tigung &uuml;ber den Erhalt der
          Immatrikulationsbescheinigung erhalten Sie nicht. / ATTENTION!!! To
          check that the certificate of enrollment has been received and how the
          processing status is, you can log in several times with the data you
          can find enclosed. You won&#39;t get an extra acknowledgement for the
          certificate. Mit freundlichen Gr&uuml;&szlig;en / Best regards, Ihre
          Hausverwaltung Studentenwerk M&uuml;nchen Studentisches Wohnen
        </p>
      </div>
    );
  }
}

Mail55.defaultProps = {
  senderName: "Beathe Schuller",
  sender: "beathe.schuller@stwm.de",
  date: "June 1, 2020, 3:15",
  subject: "Hochladen der IB - Studentenwerk München",
  capital: "B",
  keyID: 55,
  avatarColor: "xxxx",
  unseen: true,
};

export default Mail55;
