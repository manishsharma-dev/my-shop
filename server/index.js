const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require('dotenv').config();
const app = express();
app.use(morgan(process.env.morganmode));

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.port))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    //res.send('a new node project');
    res.render('index' , {title:"My Own Shop | Home"});
});