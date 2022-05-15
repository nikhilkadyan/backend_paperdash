const mongoose = require("mongoose");
const MovieGenre = require("./movieGenreModel");
const MovieVideo = require("./movieVideoModel");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "Please fill a alias"],
    },
    backdropPath: {
        type: String,
        unique: true,
    },
    posterPath: {
        type: String,
        unique: true,
    },
    overview: {
        type: String,
        trim: true,
    },
    voteAverage: {
        type: Number,
    },
    voteCount: {
        type: Number,
    },
    runtime: {
        type: Number,
    },
    releaseDate: {
        type: String,
        trim: true,
    },
    genres: {
        type: Array
    },
    videos: {
        type: Array
    }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie