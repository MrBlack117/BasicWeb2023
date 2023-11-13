const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes');
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({extended: true})); // Allows to parse data from forms
app.use(bodyParser.json()); // Allows to parse JSON data

app.use('/auth', authRoutes);

app.get('/', function (req, res) {
    res.status(200)
    res.sendFile(path.join(__dirname, 'pages/login.html'));
});

app.get('/registration', function (req, res) {
    res.status(200)
    res.sendFile(path.join(__dirname, 'pages/registration.html'))
})

module.exports = app;