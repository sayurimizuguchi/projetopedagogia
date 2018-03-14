require('dotenv').config({ silent: true });

var mysql = require('mysql');

var connMySQL = function(){
			return mysql.createConnection({
              host: process.env.HOSTNAME,
              port:  process.env.RDS_PORT,
              user: process.env.RDS_USER,
              password: process.env.RDS_PASSWORD,
              database: 'mydb'
		});
};

module.exports = function (){
	return connMySQL;
};