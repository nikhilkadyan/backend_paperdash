const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill a name"],
    },
    alias: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please fill a email"],
        validate: [validator.isEmail, " Please provide a valid email"],
    },
    phone: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
        trim: true,
    },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client