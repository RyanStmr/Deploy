const express = require("express"); //Express to run our app
const app = express(); //Initiate the appconst bodyParser = require('body-parser');//Parse JSON requests
const path = require("path"); //Navigate to build folder
const bodyParser = require("body-parser");
const { pool } = require("./config");
const helmet = require("helmet");

const fs = require("fs");
const { json } = require("express");
const data = fs.readFileSync("users.json");
const users = JSON.parse(data);

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(helmet());

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

app.get("/connect", (req, res) => {
  //API logic
  console.log(req.headers["user-agent"]);
  let newId = users.allUsers.length + 1;
  let browser = req.headers["user-agent"];
  const newUser = createNewUser(newId, browser);

  //Create Table On connection
  pool.query(
    `CREATE TABLE USER${newUser.userID}(
      ID SERIAL PRIMARY KEY NOT NULL, 
      USERINFO json,
      USERSURVEYINFO json
      )`,
    (error, results) => {
      if (error) {
        console.log("error when creating new user");
      }
    }
  );
  res.send(newUser);
});

/*
CURRENTEMAIL INT,
      CURRENTINBOX TEXT,
      HEADERINFO INT,
      INEAMILTEXT BOOLEAN,
      MOUSEPOSXPLAIN INT,
      MOUSEPOSYPLAIN INT,
      MOUSEPOSXTRANSFORM INT,
      MOUSEPOSYTRANSFORM INT,
      CLICK INT,
      CLICKPOSXTRANSFORM INT,
      CLICKPOSYTRANSFORM INT,
      TIMESTAMP INT,
      GAZEX INT,
      GAZEY INT,
      GAZEXTRANSFORM INT,
      GAZEYTRANSFORM INT,
      VALIDATIONGAZE INT,
      USERID INT,
      USERNICKNAME TEXT;
      PAGESCROLLY INT,
      PAGESCROLLX INT,
      BRWOSERWIDTH INT,
      BROWSERHEIGHT INT,
      MARGINTOSCREENTOP INT,
      MARGINTOSCREENLEFT INT,
      MOUSEGENERALFIELD INT,
      MOUSEEMAILFIELD INT,
      RESUL
       */

function createNewUser(id, browser) {
  let newUser = {
    userID: id,
    browserInfo: browser,
  };

  users.allUsers.push(newUser);
  var usersEnc = JSON.stringify(users);
  fs.writeFile("users.json", usersEnc, newUserAddedToJson);

  console.log(
    "Added new User. User: " + users.allUsers[newUser.userID - 1].userID
  );

  return newUser;
}

function newUserAddedToJson() {
  console.log("user added to json");
}

//API post request also before serving React
app.post("/data", (req, res) => {
  //userData Array of Json Objects
  let userData = req.body;
  console.log(`receiving data from ${userData[0].userId} `);
  userData.forEach((element) => {
    console.log(element.userId);
    if (element.userId === 0) return;

    let jsonObject = JSON.stringify(element);

    pool.query(
      `INSERT INTO USER${element.userId} (USERINFO) VALUES ('${jsonObject}')`,
      (error, results) => {
        if (error) {
          throw error;
        }
      }
    );
  });
  res.send(userData);
});

app.post("/SurveyData", (req, res) => {
  //userData Array of Json Objects
  let userData = req.body;
  console.log(userData);
  let jsonObject = JSON.stringify(userData);

  pool.query(
    `INSERT INTO USER${userData.userID} (USERSURVEYINFO) VALUES ('${jsonObject}')`,
    (error, results) => {
      if (error) {
        console.log(`error when inserting surveyData ${error}`);
      }
    }
  );

  res.send(userData);
});

//Serving React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
