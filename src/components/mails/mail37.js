import React, { Component } from "react";
import "./MailsDefault.css";

class Mail37 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment onMouseOver={this.props.inEmailText}>
        <p>
          <img
            alt="Netflix-Kindersicherungshandbuch | Internetangelegenheiten"
            src="https://www.internetmatters.org/wp-content/uploads/2018/01/netflix-logo-png-large-1-1.png"
            width="300px"
            height="150"
          />
        </p>

        <p>
          <strong>We&#39;re sorry to say goodbye</strong>
        </p>

        <p>&nbsp;</p>

        <p>Hello,&nbsp;</p>

        <p>
          iTunes let us know that you asked to cancel your membership. We&#39;ve
          cancelled your membership effective Monday, June 29th, 2020.
        </p>

        <p>
          Obviously we&#39;d love to have you back. If you change your mind,
          simply restat your membership to enjoy all the best TV shows &amp;
          movies without interruption.
        </p>

        <p>RESTART MEMBERSHIP</p>

        <p>
          We&#39;re here to help if you need it. Visit the Help Center for more
          info or contact us.
        </p>

        <p>-Your friends at Netflix</p>
      </React.Fragment>
    );
  }
}

Mail37.defaultProps = {
  senderName: "Netflix",
  sender: "team@netflix.com",
  date: "June 26, 2020, 03:01",
  subject: "We're sorry to say goodbye",
  capital: "N",
  keyID: 37,
  avatarColor: "red",
  unseen: true,
};

export default Mail37;
