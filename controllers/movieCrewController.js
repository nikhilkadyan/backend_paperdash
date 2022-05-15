const MovieCrew = require('../models/movieCrewModel');
const base = require('./baseController');

exports.getAllMovieCrew = base.getAll(MovieCrew);
exports.getOneMovieCrew = base.getOne(MovieCrew);
exports.addNewMovieCrew = base.createOne(MovieCrew);
exports.updateMovieCrew = base.updateOne(MovieCrew);
exports.deleteMovieCrew = base.deleteOne(MovieCrew);