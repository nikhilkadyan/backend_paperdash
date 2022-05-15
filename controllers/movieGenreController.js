const MovieGenre = require('../models/movieGenreModel');
const base = require('./baseController');

exports.getAllMovieGenre = base.getAll(MovieGenre);
exports.getOneMovieGenre = base.getOne(MovieGenre);
exports.addNewMovieGenre = base.createOne(MovieGenre);
exports.updateMovieGenre = base.updateOne(MovieGenre);
exports.deleteMovieGenre = base.deleteOne(MovieGenre);