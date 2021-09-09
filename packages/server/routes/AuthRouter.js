const express = require('express')
const passport = require('passport');

const router = express.Router()


router.get('/signin',
    (req, res, next) => {
        res.json({
            message: 'signin'
        })
    }
);

module.exports = router;