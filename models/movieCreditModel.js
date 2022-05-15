const mongoose = require("mongoose");
const validator = require("validator");

const movieCreditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill a name"],
    },
    job: {
        type: String,
        unique: true,
        required: [true, "Please fill a job"],
    }
});

const MovieCredit = mongoose.model("MovieCredit", movieCreditSchema);
module.exports = MovieCredit