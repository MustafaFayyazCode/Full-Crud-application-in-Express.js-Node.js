const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/Database/connection');
connectDB();

const app = express();
const port = 3000;

// log request 
app.use(morgan('tiny'));

// Mongodb Connection



// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine 

app.set("view engine", "ejs")
// app.set('views', __dirname + '/views');
// const { homeRoutes } = require('./render');
// app.get('/', homeRoutes);


// load assests
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routes
app.use('/', require('./server/route/route'))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})