import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

class SurveyComponent extends Component {
  state = {
    userID: 0,
  };
  //Define Survey JSON
  json = {
    elements: [
      {
        type: "text",
        name: "customerName",
        title: "What is your name?",
        isRequired: true,
      },
      {
        type: "text",
        name: "customerName1",
        title: "What is your name?",
        isRequired: true,
      },
      {
        type: "text",
        name: "customerName2",
        title: "What is your name?",
        isRequired: true,
      },
    ],
  };

  componentDidMount() {
    let userID = this.props.userInfo.userID;
    this.setState({ userID: userID });
  }

  //Define a callback methods on survey complete
  onComplete = (survey, options) => {
    //Write survey results into database
    //console.log("Survey results: " + JSON.stringify(survey.data));
    //Send to Server
    const data = {
      userID: this.state.userID,
      userAnswers: survey.data,
    };

    const response = fetch("/SurveyData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sentSurveyToServer"));
  };

  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
    /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  }
}

export default SurveyComponent;
