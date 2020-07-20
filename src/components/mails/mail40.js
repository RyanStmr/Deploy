import React, { Component } from "react";
import "./MailsDefault.css";

class Mail40 extends Component {
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
              Sehr geehrter Mieter, Dear Tenant, bitte um Beachtung des Anhangs.
              Please take note of the attachment. -- Mit freundlichen
              Gr&uuml;&szlig;en i.A. Birgit Gammer Studentenwerk M&uuml;nchen
              Technische Sachbearbeiterin Abteilung Studentisches Wohnen
              Adelheidstra&szlig;e 13 80798 M&uuml;nchen
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail40.defaultProps = {
  senderName: "Birgit Gammer",
  sender: "birgit.gammer@stwm.de",
  date: "June 12, 2020, 01:39",
  subject: "Ankündigung/Announcement Studentenwerk München",
  capital: "B",
  keyID: 39,
  avatarColor: "blue",
};

export default Mail40;
