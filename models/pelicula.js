var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    titulo: {type: String},
    anio: {type: Number},
    pais: {type: String},
    urlImage: {type: String},
    genero: {type: String, enum: ['Terror', 'Comedia', 'Fantasia', 'Drama']},
    descripcion: {type: String}
});

module.exports = mongoose.model('Pelicula', peliculaSchema); 