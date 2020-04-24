require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

// Routes
const authRoute = require('./routes/authentication');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');

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

    // Middlewares used
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());

    // Routes used
    app.use('/api', authRoute);
    app.use('/api', userRoute);
    app.use('/api', categoryRoute);
    app.use('/api', productRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));