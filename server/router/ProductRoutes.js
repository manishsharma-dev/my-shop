const express = require("express");
const router = express.Router();

const productController = require('../controllers/ProductController');

router.post('/', productController.product_create_post);

module.exports = router;