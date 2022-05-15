const Movie = require('../models/movieModel');
const base = require('./baseController');

exports.getAllMovie = base.getAll(Movie);
exports.getOneMovie = base.getOne(Movie);
exports.addNewMovie = base.createOne(Movie);
exports.updateMovie = base.updateOne(Movie);
exports.deleteMovie = base.deleteOne(Movie);