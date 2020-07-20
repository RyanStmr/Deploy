import React, { Component } from "react";
import "./MailsDefault.css";

class Mail34 extends Component {
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
              One of our Team members have been infected by the Corona Virus.
              View the secured Document to get more details and also guidelines
              on how to keep safe. Regards, Management
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail34.defaultProps = {
  senderName: "Management",
  sender: "management@company.com",
  date: "July 1, 2020, 03:25",
  subject: "Information Unit",
  capital: "M",
  keyID: 34,
  avatarColor: "",
};

export default Mail34;
