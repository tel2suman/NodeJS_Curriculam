
const express =require('express');

const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

app.set('views', 'views')


const userroute = require('./app/routes/userroute');
app.use(userroute);



const port = 3305;

app.listen(port, ()=>{
    console.log("server is running on port", port);
})