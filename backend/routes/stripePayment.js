const express = require('express');
const router = express.Router();
const {makeStripePayment} = require('../controllers/stripePayment');

router.post('/stripe', makeStripePayment)

module.exports = router;