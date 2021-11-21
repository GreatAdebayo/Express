const express = require('express');
const path = require('path'); //For showing HTML Pages
const app = express(); //Initialize Express


// app.set('view engine', 'pug'); //To initialize pug template engine

app.set('view engine', 'ejs'); //To initialize pug template engine

app.set('views', 'views'); //To tell Express which folder to find the html files

app.use(express.urlencoded({ extended: true }));
app.use(express.json());// For parsing incoming request


const rootDir = require('./util/path')

//Import Routes
const adminRoutes = require('./routes/Admin')
const shopRoute = require('./routes/Shop')


//Controllers
const errorController = require('./controllers/error')


//Register Routes
app.use('/admin', adminRoutes)
app.use(shopRoute) //Default Page
app.use(express.static(path.join(__dirname, 'public'))); //To have access to public folders

//Page Not Found
app.use(errorController.get404)



app.listen(3000);