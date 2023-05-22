
  const User = require('../models/userModels');
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcryptjs');
  
  module.exports = {
      register: function(req, res) {
        const newUser = {
          email: req.body.email,
          password: req.body.password
        };
        
        User.register(newUser, function(err, user) {
          if (err) {
            res.status(500).send('Internal Server Error');
            return;
          }
    
          res.json(user);
        });
      },
    
      login: function(req, res) {
        const email = req.body.email;
        const password = req.body.password;
  
        console.log(email, ' ', password);
        
        User.getUserByEmail(email, function(err, user) {
          if (err || !user) {
            res.status(401).send('Invalid email or password');
            return;
          }
          
          bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err || !isMatch) {
              res.status(401).send('Invalid email or password');
              return;
            }
    
            const token = jwt.sign({ id: user.id }, 'secret-key', { expiresIn: '1h' });
            
            res.json({
              token,
              user: {
                id: user.id,
                email: user.email
              }
            });
          });
        });
      },
    
      getAllUsers: function(req, res) {
        User.getAllUsers(function(err, users) {
          if (err) {
            res.status(500).send('Internal Server Error');
            return;
          }
          
          res.json(users);
        });
      }
    };
    