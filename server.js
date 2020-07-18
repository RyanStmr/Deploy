const express = require("express"); //Express to run our app
const app = express(); //Initiate the appconst bodyParser = require('body-parser');//Parse JSON requests
const path = require("path"); //Navigate to build folder
const bodyParser = require("body-parser");
const { pool } = require("./config");
const cors = require("cors");
const helmet = require("helmet");

const fs = require("fs");
const data = fs.readFileSync("users.json");
const users = JSON.parse(data);

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
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

  pool.query(
    `CREATE TABLE USER${newUser.userID}(ID SERIAL PRIMARY KEY NOT NULL, MOUSEPOSX INT NOT NULL)`,
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
  res.send(newUser);
});

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
  //tableNamePart = newUser.userID;

  //let newTable = `CREATE TABLE  USER${newUser.userID}(userId INT, currentEmail INT, x INT)`; //keyID INT AUTO_INCREMENT PRIMARY KEY

  return newUser;
}

function newUserAddedToJson() {
  console.log("user added to json");
}

//API post request also before serving React
app.post("/data", (req, res) => {
  //userData Array of Json Objects
  let userData = req.body;
  userData.forEach((element) => {
    console.log(element.userId);

    if (element.userId === 0) return;
    //let userDataAll = ({ browserHeight, browserWidth, ...rest } = element);

    /*let userDataProto = ({ userId, currentEmail, x } = element);
    
    pool.query(`INSERT INTO USER${userId} (userId, currentEmail, x) VALUES (${userId}, ${currentEmail}, ${x} )`) //SET ?;
    */

    pool.query(
      `INSERT INTO USER${element.userId} (MOUSEPOSX) VALUES (${element.mousePosXPlain})`,
      (error, results) => {
        if (error) {
          throw error;
        }
      }
    );
  });
  res.send(userData);

  /*pool.query(
    `INSERT INTO USER${userId} (author, title) VALUES ($1, $2)`,
    [author, title],
    (error) => {
      if (error) {
        throw error;
      }
    }
  );*/
});

//Serving React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
