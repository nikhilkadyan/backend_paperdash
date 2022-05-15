const MovieCredit = require('../models/movieCreditModel');
const base = require('./baseController');

exports.getAllMovieCredit = base.getAll(MovieCredit);
exports.getOneMovieCredit = base.getOne(MovieCredit);
exports.addNewMovieCredit = base.createOne(MovieCredit);
exports.updateMovieCredit = base.updateOne(MovieCredit);
exports.deleteMovieCredit = base.deleteOne(MovieCredit);