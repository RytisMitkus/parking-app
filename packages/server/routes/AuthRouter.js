const express = require('express')
const passport = require('passport');

const router = express.Router()

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        return cb(null, profile);
    }
));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/hey', session: false }),
    (req, res) => {
        res.send(req.user);
    }

);

module.exports = router;