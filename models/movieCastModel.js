const mongoose = require("mongoose");
const validator = require("validator");

const movieCastSchema = new mongoose.Schema({
    character: {
        type: String,
        unique: true,
        required: [true, "Please fill a character"],
    },
    name: {
        type: String,
        required: [true, "Please fill a name"],
    }
});

const MovieCast = mongoose.model("MovieCast", movieCastSchema);
module.exports = MovieCast