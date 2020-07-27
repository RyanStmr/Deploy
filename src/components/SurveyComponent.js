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
        type: "radiogroup",
        name: "gender",
        title: "Please select your gender?",
        isRequired: true,
        colCount: 3,
        choices: ["male", "female", "other"],
      },
      {
        type: "text",
        name: "customerName",
        title: "What was your alias name?",
        isRequired: true,
      },
      {
        type: "text",
        name: "age",
        title: "What is your age?",
        isRequired: true,
      },
      {
        type: "text",
        name: "profession",
        title: "What is your profession?",
        isRequired: true,
      },
      {
        type: "text",
        name: "emailClient",
        title: "Which email-clients do you use?",
        isRequired: false,
      },
      {
        type: "text",
        name: "Time Browsing",
        title: "How much time do you spend browsing the internet per day?",
        isRequired: false,
      },
      {
        type: "matrix",
        name: "Quality",
        title:
          "Please indicate if you agree or disagree with the following statements",
        columns: [
          {
            value: 1,
            text: "Strongly Disagree",
          },
          {
            value: 2,
            text: "Disagree",
          },
          {
            value: 3,
            text: "Neutral",
          },
          {
            value: 4,
            text: "Agree",
          },
          {
            value: 5,
            text: "Strongly Agree",
          },
        ],
        rows: [
          {
            value: "Experience IT Security",
            text: "I have experience with IT Security ",
          },
          {
            value: "Experience Eye Tracking",
            text: "I have experience with Eye Tracking",
          },
          {
            value: "Information presented enough",
            text:
              "The information presented on the interface was enough to make me come to a decision on categorizing the email ",
          },
          {
            value: "Information presented enough",
            text:
              "The information presented on the interface was enough to make me come to a decision on categorizing the email ",
          },
        ],
      },
      {
        type: "text",
        name: "Important aspects",
        title:
          "What aspects of the email made you categorize it as Important? (key words are enough)",
        isRequired: true,
      },
      {
        type: "text",
        name: "Spam aspects",
        title:
          "What aspects of the email made you categorize it as Spam? (key words are enough)",
        isRequired: true,
      },
      {
        type: "text",
        name: "Bin aspects",
        title:
          "What aspects of the email made you categorize it as Bin? (key words are enough)",
        isRequired: true,
      },
      {
        type: "rating",
        name: "Client",
        title:
          "Were you sure when making your decision while categorizing the emails?",
        minRateDescription: "Not sure",
        maxRateDescription: "Completely sure",
      },

      {
        type: "boolean",
        name: "bool",
        title: "Please answer the question",
        label: "Are you 21 or older?",
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
