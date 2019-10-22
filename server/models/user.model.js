
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    password: { type: String, required: true, max: 20, min: 5 },
    username: { type: String, required: true, max: 20, min: 2 },
    email: { type: String, required: false, unique: true, max: 100, min: 5 }

});

module.exports = mongoose.model("users", userSchema);
