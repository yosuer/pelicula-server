var express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        methodOverride = require("method-override"),
        logger = require("morgan"),
        mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peliculas', function (err, res) {
    if (err)
        throw err;
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(logger('combined'));

var models = require('./models/pelicula')(app, mongoose);
var PeliculaCtrl = require('./controllers/peliculas');

var pelicula = express.Router();
pelicula.route('/pelicula')
        .get(PeliculaCtrl.findAllPeliculas)
        .post(PeliculaCtrl.addPelicula);
pelicula.route('/pelicula/:id')
        .get(PeliculaCtrl.findById)
        .put(PeliculaCtrl.updatePelicula)
        .delete(PeliculaCtrl.deletePelicula);

app.use('/api', pelicula);

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});