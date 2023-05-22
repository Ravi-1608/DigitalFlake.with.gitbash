
const db = require('../config/db');
const bcrypt = require('bcryptjs');

module.exports = {
    register: function(user, callback) {
      bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return callback(err);
        
        const query = `INSERT INTO users (email, password) VALUES ('${user.email}', '${hash}')`;
        
        db.getConnection().query(query, function(err, result) {
          if (err) return callback(err);
          
          callback(null, result);
        });
      });
    },
  
    getUserByEmail: function(email, callback) {
      const query = `SELECT * FROM users WHERE email = '${email}'`;
  
      db.getConnection().query(query, function(err, rows) {
        if (err) return callback(err);
        
        callback(null, rows[0]);
      });
    },
  
    getAllUsers: function(callback) {
      const query = 'SELECT * FROM users';
  
      db.getConnection().query(query, function(err, rows) {
        if (err) return callback(err);
        
        callback(null, rows);
      });
    }
  };