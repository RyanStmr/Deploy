import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./Survey.css";

class SurveyComponent extends Component {
  state = {
    userID: 0,
  };

  //Define Survey JSON
  json = {
    showQuestionNumbers: "off",
    elements: [
      {
        type: "radiogroup",
        name: "gender",
        title: "Please select your gender",
        isRequired: true,
        colCount: 4,
        choices: ["male", "female", "other", "prefer not to say"],
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
        title: "Which email-clients do you use? (eg. Gmail, Outlook etc.)",
        isRequired: true,
      },
      {
        type: "checkbox",
        name: "email device",
        title: "Which device do you use to check your Emails?",
        isRequired: true,
        colCount: 5,
        choices: ["Desktop", "Laptop", "Smartphone", "Tablet", "other"],
      },
      {
        type: "text",
        name: "Time Social Media",
        title:
          "How much time do you spend on Social Media per day? (eg. Instagram, Facebook etc.)",
        isRequired: false,
      },
      {
        type: "matrix",
        name: "User Experience",
        title:
          "Please indicate if you agree or disagree with the following statements.",
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
              "I used information provided in the interface to categorize the emails.",
          },
          {
            value: "Categorize Important",
            text: " I found it easy to categorize the emails as 'important'",
          },
          {
            value: "Categorize Spam",
            text: "I found it easy to categorize the emails as 'spam'",
          },
          {
            value: "Categorize Bin",
            text: "I found it easy to categorize the emails as 'bin'",
          },
        ],
      },

      {
        type: "text",
        name: "Important aspects",
        title:
          "Which aspects of the email made you categorize it as Important? (key words are enough)",
      },
      {
        type: "text",
        name: "Spam aspects",
        title:
          "Which aspects of the email made you categorize it as Spam? (key words are enough)",
      },
      {
        type: "text",
        name: "Bin aspects",
        title:
          "Which aspects of the email made you categorize it as Bin? (key words are enough)",
      },
      {
        type: "radiogroup",
        name: "Reimbursement",
        title:
          "How to you want to reimbursed? (Any information given here will not be connected to the study data) ",
        isRequired: true,
        colCount: 3,
        choices: ["MMI-Points", "5€ (PayPal or Amazon)", "None"],
      },
      {
        name: "email",
        type: "text",
        inputType: "email",
        visibleIf:
          "{Reimbursement}='MMI-Points' or {Reimbursement}='5€ (PayPal or Amazon)' ",
        title: "Your E-mail:",
        placeHolder: "your-email@domain.org",

        validators: [
          {
            type: "email",
          },
        ],
      },
      {
        type: "text",
        name: "MMI Name",
        visibleIf: "{Reimbursement}='MMI-Points'",
        title: "Please insert your first and last name here.",
      },
      {
        type: "text",
        name: "MMI Matrikelnummer",
        visibleIf: "{Reimbursement}='MMI-Points'",
        title: "Please insert your enrolement number (Matrikelnummer) here.",
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
