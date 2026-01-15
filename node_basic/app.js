const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Home page");
})

app.get('/about', (req, res)=>{
    res.send("About page");
})

app.get('/contact', (req, res)=>{
    res.send("Contact Page");
})

const port = 3305;

app.listen(port,()=>{
    console.log("server is running on port", port);
})