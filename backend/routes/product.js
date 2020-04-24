const express = require('express');
const router = express.Router();

const { getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct } = require('../controllers/product');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/authentication');
const { getUserById } = require('../controllers/user');

// params
router.param('userId', getUserById);
router.param('productId', getProductById);

// routes
router.post('/product/create/:userId', isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get('/product/:productId', getProduct);
router.get('/product/photo/:productId', photo);

router.delete('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteProduct);
router.put('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, updateProduct);

module.exports = router;