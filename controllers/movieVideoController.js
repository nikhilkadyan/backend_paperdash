const MovieVideo = require('../models/movieVideoModel');
const base = require('./baseController');

exports.getAllMovieVideo = base.getAll(MovieVideo);
exports.getOneMovieVideo = base.getOne(MovieVideo);
exports.addNewMovieVideo = base.createOne(MovieVideo);
exports.updateMovieVideo = base.updateOne(MovieVideo);
exports.deleteMovieVideo = base.deleteOne(MovieVideo);