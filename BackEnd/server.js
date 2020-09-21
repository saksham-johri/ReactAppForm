const PORT = 8080;

var express = require("express");
var app = express();

var mongoose = require("mongoose");
var userdb = require("./schema");
var cors = require("cors");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/sign_up", (req, res) => {
  // console.log("req.body", req.body);
  var username = req.body.userName;
  var mail = req.body.email;
  var password = req.body.pass;
  var fName = req.body.fname;
  var lName = req.body.lname;

  var data = {
    userName: username,
    email: mail,
    pass: password,
    fname: fName,
    lname: lName,
  };

  userdb.find({ userName: username }, (err, result) => {
    if (result.length > 0) {
      res.send("User Already Exist");
    } else {
      userdb.create(req.body, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
});

app.post("/sign_in", (req, res) => {
  var username = req.body.userName;
  var password = req.body.pass;

  userdb.find({ userName: username, pass: password }, (err, result) => {
    if (result.length > 0) {
      res.send("Logged In Successfully!");
    } else {
      res.send("Username / Password Incorrect!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Connected to Server on PORT: ${PORT}`);
});
