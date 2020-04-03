const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signUp, signIn, signOut } = require('../controllers/authentication');

router.post('/signup', 
    [
        check('name')
            .isLength({ min: 5 })
            .withMessage('Name must be at least 5 chars long'),

        check('email')
            .isEmail()
            .withMessage('Enter correct email'),

        check('password')
            .isLength({ min: 5 })
            .withMessage('Password must be at least 5 chars long')
    ], 
    signUp
);

router.post('/signin', 
    [
        check('email')
            .isEmail()
            .withMessage('Enter correct email'),

        check('password')
            .isLength({ min: 5 })
            .withMessage('Password is required')
    ], 
    signIn
);

router.get('/signout', signOut);

module.exports = router;