const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('User Page');
    res.send('<h1>Im User page</h1>');
})

app.use('/', (req, res, next) => {
    console.log('Home page');
    res.send('<h1>Im Homepage</h1>');
})



app.listen(5000);