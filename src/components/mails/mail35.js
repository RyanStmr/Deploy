import React, { Component } from "react";
import "./MailsDefault.css";

class Mail35 extends Component {
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
              This is a company access remote connection to security connect to
              our network from home, please follow the download process below.
              www.tessian.com/ciscovpn/download after downloading login with
              your credential(email) as your unique password is - 9J373YHW2
              thanks, IT Support Technician www.tessian.com
            </p>
          </body>
        </html>
      </div>
    );
  }
}

Mail35.defaultProps = {
  senderName: "IT Support Technician",
  sender: "Helpdesk_admin@tessian.com",
  date: "June 30, 2020, 03:07",
  subject: "Work from home - VPN connection #7761",
  capital: "H",
  keyID: 35,
  avatarColor: "green",
};

export default Mail35;
