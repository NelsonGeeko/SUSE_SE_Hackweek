const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "http://ec2-18-202-26-166.eu-west-1.compute.amazonaws.com/phpmyadmin",
//   port:"3306",
//   path:"/phpmyadmin",
  user: "leaderboard",
  password: "leaderboard",
//   database: "leads"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// connection.query(
//   "SELECT  FROM leads",
//   (err, result) => {
//     err ? console.log(err) : console.log(result[0].hexcode);
//   }
// );