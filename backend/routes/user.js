const express = require('express');
const router = express.Router();
const { getUserById, getUser, updateUser, userPurchasedList } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin} = require('../controllers/authentication');

router.param('userId', getUserById);

router.get('/user/:userId', isSignedIn, isAuthenticated, getUser);

router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser);

router.get('/orders/user/:userId', isSignedIn, isAuthenticated, userPurchasedList);

module.exports = router;