import React, { Component } from "react";
import "./MailsDefault.css";

class Mail22 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Sehr geehrter AutoScout24-Kunde, &nbsp; &nbsp; &nbsp;</p>
        <p>
          Sie haben eine neue&nbsp;Nachricht. Klicken Sie auf den
          unteren&nbsp;Link um Ihre&nbsp;AutoScout24 Nachricht zu lesen. &nbsp;
        </p>
        <p>*link entfernt*</p>
        <p>
          <sub>
            Diese E-Mail wurde automatisch generiert.&nbsp;Bitte antworten Sie
            nicht direkt,&nbsp;sondern wenden sich&nbsp;bei Fragen an unseren
            Kundenservice.{" "}
          </sub>
        </p>
        <p>
          <sub>
            AutoScout24&nbsp;GmbH | Dingolfinger Str. 1-15 | D-81673 München
            Geschäftsführer: Gregory Ellis, Christian Gisy Amtsgericht München
            HRB 128 701{" "}
          </sub>
        </p>
      </div>
    );
  }
}

Mail22.defaultProps = {
  senderName: "AutoScout24",
  sender: "account@AutoScout24.com",
  date: "June 2, 2020, 12:43",
  subject: "Neue Benachrichtigung",
  capital: "A",
  keyID: 22,
  avatarColor: "orange",
  unseen: true,
};

export default Mail22;
