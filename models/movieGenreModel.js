const mongoose = require("mongoose");
const validator = require("validator");

const movieGenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill a name"],
    }
});

const MovieGenre = mongoose.model("MovieGenre", movieGenreSchema);
module.exports = MovieGenre