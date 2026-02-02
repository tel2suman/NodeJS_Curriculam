
require("dotenv").config();

const express = require('express');

const path = require('path');

const app = express();

const ejs = require('ejs');

const DatabaseConnection = require("./app/config/dbconn")

//database connection
DatabaseConnection()

app.set('view engine', 'ejs')

app.set('views', 'views')

//static files

app.use(express.static(path.join(__dirname,'public')));

// routes

const homeroute = require('./app/routes/homeroute')
app.use(homeroute);

const buttonsroute = require('./app/routes/buttonsroute')
app.use(buttonsroute);

const cardsroute = require('./app/routes/cardsroute');
app.use(cardsroute)

const colorroute = require('./app/routes/colorroute');
app.use(colorroute)

const borderroute = require('./app/routes/borderroute');
app.use(borderroute);

const animationroute = require('./app/routes/animationroute');
app.use(animationroute);

const otherroute = require('./app/routes/otherroute');
app.use(otherroute);

const errorroute = require('./app/routes/errorroute');
app.use(errorroute);

const blankroute = require('./app/routes/blankroute');
app.use(blankroute);

const chartsroute = require('./app/routes/chartsroute');
app.use(chartsroute);

const tablesroute = require('./app/routes/tablesroute');
app.use(tablesroute);



const port = 3005;

app.listen(port,()=>{

    console.log("server is running on port", port);
});