
require('dotenv').config();

const express = require('express');

const path = require('path');

const app = express();

//database connection
const DatabaseConnection = require('./app/config/dbconn');

DatabaseConnection();

//ejs template engine
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', 'views');

//static files

app.use(express.static(path.join(__dirname,'public')));

//define json
app.use(express.json())

const homeroute =require('./app/routes/homeroute');
app.use(homeroute);

const aboutroute =require('./app/routes/aboutroute');
app.use(aboutroute);

const coursesroute = require("./app/routes/coursesroute");
app.use(coursesroute);

const blogsroute = require('./app/routes/blogsroute');
app.use(blogsroute);

const contactroute = require("./app/routes/contactroute");
app.use(contactroute);

const studentApiRoute = require("./app/routes/studentApiRoute");
app.use("/api/v1", studentApiRoute);

const userApiRoute = require("./app/routes/userApiRoute");
app.use("/api/v2", userApiRoute);

const productApiRoute = require("./app/routes/productApiRoute");
app.use('/api/pro1', productApiRoute);






const port = 5000;

app.listen(port,()=>{

    console.log("server is running on port", port);
});