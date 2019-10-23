var express = require('express');
var router = express.Router();
const users = require('../models/user.model')
const jwt = require('jsonwebtoken');
const passport = require('passport');

var crypto = require("crypto");

const hashPassword = (password) => {
  let secret = `WEBNC${password}`
    .toUpperCase()
    .split("")
    .reverse()
    .join();
  return crypto
    .createHmac("SHA256", secret)
    .update(password)
    .digest("hex");
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    msg: "User page"
  })
});



router.post('/register', (req, res, next) => {
  const { body } = req;
  if (!body.email || body.email.length < 5) {
    return res.json({
      type: 0
    });
  }
  if (!body.password || body.password.length < 5) {
    return res.json({
      type: 0
    });
  }

  users.findOne({
    email: body.email
  })
    .then(user => {
      if (user === null) {
        let finalUser = new users({
          email: body.email,
          username: body.username,
          password: hashPassword(body.password)
        });

        let token = jwt.sign({
          ...finalUser
        }, process.env.SECRET_KEY, {
          expiresIn: 1440
        })

        return finalUser.save()
          .then(() => res.json({
            token: token,
            data: {
              username: finalUser.username,
              email: finalUser.email
            },
            type: 1
          }))
          .catch(err => {
            res.json({
              type: 0,
              err
            })
          });
      } else {
        res.json({ errors: 'User already exists', type: 0 })
      }

    })
    .catch(err => {
      res.json({
        type: 0,
        err: err
      })
    })
});


router.post('/login', function (req, res, next) {
  passport.authenticate('local',
    { session: false },
    (err, user, info) => {
      if (err || !user) {
        console.log("error from passport return   ")
        return res.json({
          type: 0,
          message: info ? info.message : 'Login failed',
          user: user
        });
      }

      req.login(user, { session: false }, (err) => {

        if (err) {
          res.json({
            err,
            type: 0
          })
        }
        const token = jwt.sign({
          ...user
        }, process.env.SECRET_KEY, {
          expiresIn: 1440
        })

        return res.json({
          data: { email: user.email, username: user.username },
          token,
          type: 1
        });
      });
    })
    (req, res);

});


router.get('/me', function (req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Must be logined to access to /me',
        user: user
      });
    }
    return res.json({
      userInfor: user
    }
    )

  })
    (req, res);
});


module.exports = router;
