require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authentication');

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
        console.error("DB GOT CRASH");
    });

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());

    app.use("/api", authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));