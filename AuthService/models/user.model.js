const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }
})

module.exports = mongoose.model('user', UserSchema);
