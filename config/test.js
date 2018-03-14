require('dotenv').config({ silent: true });
var mysql = require('mysql');

var connMySQL = mysql.createConnection({
              host: process.env.HOSTNAME,
              port:  process.env.RDS_PORT,
              user: process.env.RDS_USER,
              password: process.env.RDS_PASSWORD
});


connMySQL.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = function (){
	return connMySQL;
}