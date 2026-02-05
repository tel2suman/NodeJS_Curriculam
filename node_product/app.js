
require('dotenv').config()

const express = require('express');

const path = require('path');

const app = express();

//database connection
const DatabaseConnection = require('./app/config/dbconn');

DatabaseConnection();

//static files
app.use(express.static(path.join(__dirname,'public')));

//app.use
app.use(express.json())

// ejs template engine
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', 'views');

//api routes
const productApiRoute = require('./app/routes/productApiRoute');
app.use('/api/pro',productApiRoute);



const port = 4000;

app.listen(port,()=>{

    console.log("server is running on port", port)
})