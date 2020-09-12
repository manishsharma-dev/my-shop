const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName : {
        type:String,
        required:true
    },
    price : {
        type: String,
        required : true,
    },
    imageUrl: {
        type:String
    }
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;