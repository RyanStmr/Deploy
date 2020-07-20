import React, { Component } from "react";
import "./MailsDefault.css";

class Mail21 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <div class="ce-gallery  " data-ce-columns="1" data-ce-images="1">
          <div class="ce-outer">
            <div class="ce-inner">
              <figure class="image">
                <img
                  class="image-embed-item"
                  src="/fileadmin/w00bgh/www/it-sicherheit/O2-Header.png"
                  width="576"
                  height="80"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
        <div
          id="c9084"
          class="frame 
 frame-type-textmedia frame-layout-0"
        >
          <p>Guten Tag Frau Wilke,</p>
          <p>
            Ihre aktuelle Rechnung für den Abrechnungszeitraum 31.05.2020 –
            30.06.2020 liegt für Sie bereit. Darin wird für Ihre Kundennummer
            7512332 ein Gesamtbetrag von 96,64 EUR ausgewiesen.
          </p>
          <p>
            Der offene Rechnungsbetrag wird von Ihrem Konto am 07.07.2020
            eingezogen.{" "}
          </p>
          <div class="tablewrapper">
            <table>
              {" "}
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a
                      href="/phishing/selbstlerntest-phishing/"
                      class="internal-link"
                    >
                      Laden Sie diese Rechnung
                    </a>{" "}
                  </td>{" "}
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <sub>
              Michiel van Eldik
              <br />
              Chief Marketing Officer
              <br />
              Telefónica Germany GmbH &amp; Co. OHG
            </sub>
          </p>
        </div>
      </div>
    );
  }
}

Mail21.defaultProps = {
  senderName: "Michiel van Eldik",
  sender: "rechnung@o2.company.de",
  date: "Juni 29, 2020, 1:45",
  subject: "Ihre aktuelle Rechnung",
  capital: "M",
  keyID: 21,
  avatarColor: "blue",
};

export default Mail21;
