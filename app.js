var express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        methodOverride = require("method-override"),
        logger = require("morgan"),
        mongoose = require('mongoose');

var dbconnection = 'mongodb://' + process.env.DB_HOST + '/peliculas';
mongoose.connect(dbconnection, function (err, res) {
    if (err) {
        throw err;
    }
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(logger('combined'));

var models = require('./models/pelicula')(app, mongoose);

app.use('/api', require('./routes/pelicula'));

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});