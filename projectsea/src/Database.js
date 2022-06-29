const mysql = require("mysql");

const connection = mysql.createPool({
  host: "http://ec2-18-202-26-166.eu-west-1.compute.amazonaws.com/phpmyadmin/:3306",
  user: "leaderboard",
  password: "leaderboard",
  database: "leads"
});

connection.query(
  "SELECT * FROM leads",
  (err, result) => {
    err ? console.log(err) : console.log(result[0].hexcode);
  }
);