const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const users = require('./models/user.model')


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

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, cb) {
        password = hashPassword(password);
        return users.findOne({ email, password })
            .then(user => {
                if (!user) {
                    return cb(null, false,
                        { message: 'Incorrect email or password.' });
                }
                else {
                    return cb(null, user, {
                        message: 'Logged In Successfully'
                    });
                }

            })
            .catch(err => {
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'WebNC'
},
    function (jwtPayload, cb) {

        //find the user in db if needed
        return users.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
module.exports = passport