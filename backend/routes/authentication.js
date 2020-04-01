const express = require('express');
const router = express.Router();
const {signUp, signOut} = require('../controllers/authentication');

router.post('/signup', signUp)
router.get('/signout', signOut);

module.exports = router;