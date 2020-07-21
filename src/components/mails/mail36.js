import React, { Component } from "react";
import "./MailsDefault.css";

class Mail36 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <p>Dear Sir/Madam,</p>

            <p>
              go through the attachement document on safety measures regarding
              the spreading of corona virus. This little measure can save you.
            </p>

            <p>Use the link below to download</p>

            <p>Safety Measures.pdf</p>

            <p>&nbsp;</p>

            <p>
              Symptoms Common symptoms include fever, cough, shortness of breath
              and breathing difficulties.
            </p>

            <p>&nbsp;</p>

            <p>Regards,</p>

            <p>Dr John Men</p>

            <p>Specialist wuhan-virus-advisory</p>
          </body>
        </html>
      </div>
    );
  }
}

Mail36.defaultProps = {
  senderName: "Dr John Men",
  sender: "John.Men@Virus-advisory.com",
  date: "Feruary 2, 2020, 6:00",
  subject: "Corona Virus Safety Measures",
  capital: "J",
  keyID: 36,
  avatarColor: "orange",
  unseen: true,
};

export default Mail36;
