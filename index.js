// imports start
const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const session =  require('express-session');
const connectDB = require('./config/mongodb.js')
// impoorts End

//PORT number
const PORT = process.env.PORT || 3000;

// express app.use

const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded({extend: false}))

//Routes

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.use("/admin", require('./routers/admin'))


// end routes

app.listen(PORT, console.log(`Server running on ${PORT}`))
