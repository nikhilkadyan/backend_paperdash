const mongoose = require("mongoose");
const validator = require("validator");

const movieVideoSchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
        required: [true, "Please fill a key"],
    },
    name: {
        type: String,
        required: [true, "Please fill a name"],
    },
    site: {
        type: String,
        required: [true, "Please fill a site"],
    }
});

const MovieVideo = mongoose.model("MovieVideo", movieVideoSchema);
module.exports = MovieVideo