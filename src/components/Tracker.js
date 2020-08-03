import React, { Component } from "react";
import EmailClient from "./emailClient";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      currentEmail: 0, //event dependant
      currentInbox: "AllInbox",
      insideEmailInfo: [],
      outsideEmailInfo: [], //event dependant
      mousePosXPlain: 0,
      mousePosYPlain: 0,
      mousePosXTransform: 0,
      mousePosYTransform: 0,
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
      timeStamp: 0,
      gazeX: 0,
      gazeY: 0,
      gazeXTransform: 0,
      gazeYTransform: 0,
      validationGaze: 0,
      userId: 10,
      userNickname: "",
      pageScrollY: 0,
      browserWidth: 0,
      browserHeight: 0,
      marginToScreenTop: 0,
      marginToScreenLeft: 0,
      mouseGeneralField: 0,
      mouseEmailField: 0,
      inEmailScrollAmount: 0,
      inEmailPositionY: 0,

      //To be sent at end of study
      resultInbox: [],
      visitedLinks: [],
    };

    this.stateCollector = [];
  }

  componentDidMount() {
    this.getUserID();
    this.getNickname();
    this.startCalibration();
    this.props.userID(this.state.userId);
  }

  getUserID = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/connect", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ userId: data.userID }))
      .then(() => this.props.userID(this.state.userId));
  };

  getNickname = () => {
    //set nickname from props
    let nickname = this.props.userInfo.userName;
    this.setState({ userNickname: nickname });
  };

  startCalibration = () => {
    window.GazeCloudAPI.APIKey = "GazeBehavior_NonCommercialUse";
    window.GazeCloudAPI.StartEyeTracking();
    window.GazeCloudAPI.OnCalibrationComplete = () => {
      console.log("gaze Calibration Complete");
    };
    this.startTracking();
  };

  startTracking = () => {
    var collectionInterval = setInterval(this.collectStates, 1000);
    var sendingIntervall = setInterval(this.sendData, 5000);
  };

  sendData = () => {
    //Send to Server
    const data = this.stateCollector;
    const response = fetch("/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.resetCollector);
  };

  collectStates = () => {
    this.setAllInfo();
    this.fillCollector();
    this.resetStates();
  };

  setAllInfo = () => {
    this.settingsChecker();
    this.setGazeData();
    this.setTimestamp();
  };

  setGazeData = () => {
    window.GazeCloudAPI.OnResult = function (GazeData) {
      window.gazeDataX = GazeData.docX;
      window.gazeDataY = GazeData.docY;
      window.validation = GazeData.state; // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated!
    };

    this.setState({
      gazeX: window.gazeDataX,
      gazeY: window.gazeDataY,
      validationGaze: window.validation,
    });

    //this.setTransformedGazePos(gazeXLoc, gazeYLoc);
  };

  setTimestamp = () => {
    let currentTimeLoc = Date.now();
    let newDate = new Date(currentTimeLoc).toLocaleString("de-DE");
    this.setState({ timeStamp: newDate });
  };

  fillCollector = () => {
    this.stateCollector.push(this.state);
  };

  resetCollector = () => {
    this.stateCollector = [];
  };

  resetStates = () => {
    this.setState({
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
    });
  };

  handleMouseMove(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.setState({ mousePosXPlain: x, mousePosYPlain: y });
  }

  settingsChecker = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let marginTop = window.screenTop;
    let marginLeft = window.screenLeft;

    let yScroll = Math.round(window.scrollY);

    this.setState({
      browserWidth: width,
      browserHeight: height,
      marginToScreenLeft: marginLeft,
      marginToScreenTop: marginTop,
      pageScrollY: yScroll,
    });

    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );

    this.setinEmailPositionY();
  };

  setinEmailPositionY = () => {
    let inEmailPositionY =
      this.state.mousePosYPlain + this.state.inEmailScrollAmount;
    this.setState({ inEmailPositionY: inEmailPositionY });
  };

  SetInEmailScrollAmount = (scrollAmount) => {
    let roundScrollAmount = Math.round(scrollAmount);
    this.setState({ inEmailScrollAmount: roundScrollAmount });
  };

  setTransformedMousePos = (x, y) => {
    let clientWidth = 980;
    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xTran = (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yTran = y + this.state.pageScrollY;
    } else {
      var xTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yTran = y + this.state.pageScrollY;
    }
    this.setState({ mousePosXTransform: xTran, mousePosYTransform: yTran });
  };

  handleMouseClick(event) {
    let copy = this.state;
    this.handleMouseMove(event);
    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );
    copy.click = true;
    copy.clickPosX = this.state.mousePosXPlain;
    copy.clickPosY = this.state.mousePosYPlain;
    this.setState(copy);
  }

  handleNewCurrentEmail = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleNewCurrentInbox = (inboxType) => {
    let copy = this.state;
    copy.currentInbox = inboxType;
    copy.currentEmail = 0;
    this.setState(copy);
  };

  handleInboxResult = (finalInboxLoc) => {
    let copy = this.state;
    copy.resultInbox = finalInboxLoc;
    this.setState(copy);
    this.sendData();
  };

  handleInsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      if (!copy.insideEmailInfo.includes(whichPart)) {
        copy.insideEmailInfo.push(whichPart);
      } else {
      }
      this.setState(copy);
    } else {
      this.deletefromInsideEmailInfo(whichPart);
    }
  };

  handleOutsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      copy.outsideEmailInfo.push(whichPart);
      this.setState(copy);
    } else {
      this.deletefromOutsideEmailInfo(whichPart);
    }
  };

  deletefromInsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.insideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.insideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  deletefromOutsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.outsideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.outsideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  handleClickedInboxButton = (whichButton, insideWhichButton) => {
    let copy = this.state;
    copy.insideEmailInfo.push(whichButton);
    console.log(copy);
    this.setState(copy);

    const timer = setTimeout(() => {
      this.deletefromInsideEmailInfo(whichButton);
    }, 1100);
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} onClick={this.handleMouseClick}>
        <EmailClient
          clickedButton={this.handleClickedInboxButton}
          inEmailScrollAmount={this.SetInEmailScrollAmount}
          UserInfo={this.props.userInfo}
          onNewEmail={this.handleNewCurrentEmail}
          onNewInbox={this.handleNewCurrentInbox}
          setInboxResult={this.handleInboxResult}
          insideEmailInfo={this.handleInsideEmailInfo}
          outsideEmailInfo={this.handleOutsideEmailInfo}
        ></EmailClient>
      </div>
    );
  }
}

export default Tracker;
