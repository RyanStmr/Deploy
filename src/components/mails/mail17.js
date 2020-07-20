import React, { Component } from "react";
import "./MailsDefault.css";

class Mail17 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Dear Ludwig Maximilian University München Employee :</p>
        <p>
          Human Resources Department of Technische Universität München have
          developed an employee survey with questions tailored to our employees
          and invited you to participate in it.You will be asked to anonymously
          rate many facets of the various departments, assess what you value
          most in your employment here with Technische Universität München, but
          also to make positive suggestions for improvement.
        </p>
        <p>
          This survey is web-based to make it quick and simple for fast
          reporting and analysis.This survey will take approximately three to
          Five minutes to complete. Your response will only be used to analyze..
          Please take a moment to complete the following brief by clicking{" "}
          <a
            href="/phishing/selbstlerntest-phishing/"
            target="_blank"
            rel="noopener"
            class="internal-link"
          >
            SURVEY
          </a>
          .
        </p>
        <p>
          <br /> Your responses are completely anonymous.
        </p>
        <p>Thank you in advance for your participation!</p>
      </div>
    );
  }
}

Mail17.defaultProps = {
  senderName: "LMU Munich",
  sender: "lmu@campus.de",
  date: "Mai 13, 2020, 09:28",
  subject: "Complete lmu.de Survey Now ( Important )",
  capital: "L",
  keyID: 17,
  avatarColor: "green",
};

export default Mail17;
