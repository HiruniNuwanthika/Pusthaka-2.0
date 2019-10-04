var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nalaka_ucsc'
});

connection.connect(function(err) {
  if (err) Console.log("error");
  console.log('connected!');
});

module.exports = connection;
