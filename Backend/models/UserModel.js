const { Schema, model } = require('../connection.js');
const mySchema = new Schema({
    name: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    company: { type: String, require: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = model('users', mySchema);