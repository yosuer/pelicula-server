var express = require('express');
var PeliculaCtrl = require('./controllers/peliculas');
var router = express.Router();
router.route('/pelicula')
        .get(PeliculaCtrl.findAllPeliculas)
        .post(PeliculaCtrl.addPelicula);
router.route('/pelicula/:id')
        .get(PeliculaCtrl.findById)
        .put(PeliculaCtrl.updatePelicula)
        .delete(PeliculaCtrl.deletePelicula);

module.exports = router;