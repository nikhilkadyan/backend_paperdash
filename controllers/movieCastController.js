const MovieCast = require('../models/movieCastModel');
const base = require('./baseController');

exports.getAllMovieCast = base.getAll(MovieCast);
exports.getOneMovieCast = base.getOne(MovieCast);
exports.addNewMovieCast = base.createOne(MovieCast);
exports.updateMovieCast = base.updateOne(MovieCast);
exports.deleteMovieCast = base.deleteOne(MovieCast);