require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

mongoose
    .connect("mongodb://localhost:27017/tshirts", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTS SUCCESSFULLY");
    })
    .catch((error) => {
        console.error("DB GOT CRASH")
    });

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));