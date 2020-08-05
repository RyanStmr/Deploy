import React, { Component } from "react";
import "./MailsDefault.css";

class Mail57 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>Dear all,</p>
        <p>
          please find enclosed the MoM from today’s CAB meeting. The slides on
          Octane maintenance guidance presented by Martin can be found on the
          iShare.
        </p>
        <p
          style={{
            textAlign: "start",
            textIndent: "0px",
            WebkitTextStrokeWidth: "0px",
          }}
        >
          <span style={{ fontSize: "12pt" }}>
            <span style={{ fontFamily: '"Times New Roman", serif' }}>
              <span style={{ color: "#222222" }}>
                <span style={{ fontStyle: "normal" }}>
                  <span style={{ fontVariantLigatures: "normal" }}>
                    <span style={{ fontVariantCaps: "normal" }}>
                      <span style={{ fontWeight: 400 }}>
                        <span style={{ letterSpacing: "normal" }}>
                          <span style={{ orphans: 2 }}>
                            <span style={{ textTransform: "none" }}>
                              <span style={{ whiteSpace: "normal" }}>
                                <span style={{ widows: 2 }}>
                                  <span style={{ wordSpacing: "0px" }}>
                                    <span
                                      style={{ backgroundColor: "#ffffff" }}
                                    >
                                      <span
                                        style={{
                                          textDecorationStyle: "initial",
                                        }}
                                      >
                                        <span
                                          style={{
                                            textDecorationColor: "initial",
                                          }}
                                        >
                                          Best regards
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </p>
        <p
          style={{
            textAlign: "start",
            textIndent: "0px",
            WebkitTextStrokeWidth: "0px",
          }}
        >
          <span style={{ fontSize: "12pt" }}>
            <span style={{ fontFamily: '"Times New Roman", serif' }}>
              <span style={{ color: "#222222" }}>
                <span style={{ fontStyle: "normal" }}>
                  <span style={{ fontVariantLigatures: "normal" }}>
                    <span style={{ fontVariantCaps: "normal" }}>
                      <span style={{ fontWeight: 400 }}>
                        <span style={{ letterSpacing: "normal" }}>
                          <span style={{ orphans: 2 }}>
                            <span style={{ textTransform: "none" }}>
                              <span style={{ whiteSpace: "normal" }}>
                                <span style={{ widows: 2 }}>
                                  <span style={{ wordSpacing: "0px" }}>
                                    <span
                                      style={{ backgroundColor: "#ffffff" }}
                                    >
                                      <span
                                        style={{
                                          textDecorationStyle: "initial",
                                        }}
                                      >
                                        <span
                                          style={{
                                            textDecorationColor: "initial",
                                          }}
                                        >
                                          oneSAP Project Office
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </p>
        <p
          style={{
            textAlign: "start",
            textIndent: "0px",
            WebkitTextStrokeWidth: "0px",
          }}
        >
          <span style={{ fontSize: "12pt" }}>
            <span style={{ fontFamily: '"Times New Roman", serif' }}>
              <span style={{ color: "#222222" }}>
                <span style={{ fontStyle: "normal" }}>
                  <span style={{ fontVariantLigatures: "normal" }}>
                    <span style={{ fontVariantCaps: "normal" }}>
                      <span style={{ fontWeight: 400 }}>
                        <span style={{ letterSpacing: "normal" }}>
                          <span style={{ orphans: 2 }}>
                            <span style={{ textTransform: "none" }}>
                              <span style={{ whiteSpace: "normal" }}>
                                <span style={{ widows: 2 }}>
                                  <span style={{ wordSpacing: "0px" }}>
                                    <span
                                      style={{ backgroundColor: "#ffffff" }}
                                    >
                                      <span
                                        style={{
                                          textDecorationStyle: "initial",
                                        }}
                                      >
                                        <span
                                          style={{
                                            textDecorationColor: "initial",
                                          }}
                                        >
                                          (Klaus B.)
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </p>
      </div>
    );
  }
}

Mail57.defaultProps = {
  senderName: "in.com",
  sender: "info@in.com",
  date: "Mai 05, 2020, 3:45",
  subject: "oneSAP - Change Advisory Board (04.05.2020) - MoM",
  capital: "I",
  keyID: 57,
  avatarColor: "blue",
  unseen: true,
};

export default Mail57;
