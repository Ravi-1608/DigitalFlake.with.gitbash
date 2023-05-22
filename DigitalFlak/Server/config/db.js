const mysql = require('mysql');

const connectionConfig = {
  host: 'hackathon.cv4sxbnijnr7.ap-south-1.rds.amazonaws.com',
  user: 'user_4',
  password: 'vetHomETH1p',
  database: 'database_4'
};

const connection = mysql.createConnection(connectionConfig);

module.exports = {
  connect: function() {
    connection.connect(function(err) {
      if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
      }

      console.log('Connected to the database as ID: ' + connection.threadId);
    });
  },

  getConnection: function() {
    return connection;
  }
};