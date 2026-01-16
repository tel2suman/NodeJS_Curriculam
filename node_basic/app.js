const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const homeroute = require("./app/routes/homeroute");
app.use(homeroute);


const aboutroute = require("./app/routes/aboutroute");
app.use(aboutroute);


const port = 3305;

app.listen(port,()=>{
    console.log("server is running on port", port);
})