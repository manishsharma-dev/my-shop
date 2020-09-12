const Product = require('../models/Product');

const product_index = (req, res) => {
    
}

const product_details = (req, res) => {

}

const product_delete = (req, res) => {
    
}

const product_create_post = (req, res) => {
    var productData = req.body;

    const product = new Product(productData);

    product.save()
        .then((res) => {
            res.status(200).send(result);
        })
        .catch((err) => {

        })
}

module.exports = {
    product_index,
    product_details,
    product_create_post,
    product_delete
}