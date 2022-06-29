var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://ec2-18-202-26-166.eu-west-1.compute.amazonaws.com/phpmyadmin/",
  user: "leaderboard",
  password: "leaderboard"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

