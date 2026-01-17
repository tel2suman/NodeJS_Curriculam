
const express = require('express');

const app = express();

//ejs template engine
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeroute =require('./app/routes/homeroute');
app.use(homeroute);

const aboutroute =require('./app/routes/aboutroute');
app.use(aboutroute);

const contactroute = require('./app/routes/contactroute');
app.use(contactroute);


const port = 3306;

app.listen(port,()=>{

    console.log("server is running on port", port);
});