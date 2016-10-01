var mongoose = require('mongoose');
var Pelicula = mongoose.model('Pelicula');

exports.findAllPeliculas = function (req, res) {
    Pelicula.find(function (err, peliculas) {
        if (err) {
            return res.send(500, err.message);
        }
        console.log('GET /peliculas');
        res.status(200).jsonp(peliculas);
    });
};

exports.findById = function (req, res) {
    Pelicula.findById(req.params.id, function (err, pelicula) {
        if (err) {
            return res.send(500, err.message);
        }
        console.log('GET /pelicula/' + req.params.id);
        res.status(200).jsonp(pelicula);
    });
};

exports.addPelicula = function (req, res) {
    console.log('POST');
    console.log(req.body);
    var pelicula = new Pelicula({
        titulo: req.body.titulo,
        anio: req.body.anio,
        pais: req.body.pais,
        urlImage: req.body.urlImage,
        genero: req.body.genero,
        descripcion: req.body.descripcion
    });
    pelicula.save(function (err, pelicula) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).jsonp(pelicula);
    });
};

exports.updatePelicula = function (req, res) {
    Pelicula.findById(req.params.id, function (err, pelicula) {
        pelicula.titulo = req.body.titulo;
        pelicula.anio = req.body.anio;
        pelicula.pais = req.body.pais;
        pelicula.urlImage = req.body.urlImage;
        pelicula.genero = req.body.genero;
        pelicula.descripcion = req.body.descripcion;

        pelicula.save(function (err) {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).jsonp(pelicula);
        });
    });
};

exports.deletePelicula = function (req, res) {
    Pelicula.findById(req.params.id, function (err, pelicula) {
        pelicula.remove(function (err) {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).send();
        });
    });
};