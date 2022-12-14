// imports start
const express = require('express')
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const session =  require('express-session');
const connectDB = require('./config/mongodb.js')
const bodyParser = require('body-parser');
// impoorts End

//PORT number
const PORT = process.env.PORT || 3000;

// express app.use

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
connectDB();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//Routes

app.use("/", require('./routers/home'));
app.use("/admin", require('./routers/admin'));
app.use("/login", require('./routers/login'));
app.use("/chat", require('./routers/chat'));
app.use("/listing", require('./routers/listing'));
app.use("/about", require('./routers/about'));

// end routes

app.listen(PORT, console.log(`Server running on ${PORT}`));
