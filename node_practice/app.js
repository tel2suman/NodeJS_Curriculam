const express = require('express');

const app = express();

const homeroute =require('./app/routes/homeroute');
app.use(homeroute);

app.get('/about', (req, res)=>{

    res.send("About Page");
})


const port = 3306;

app.listen(port,()=>{

    console.log("server is running on port", port);
});