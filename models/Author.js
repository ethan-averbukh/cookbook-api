//Import connection
const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;


const authorsSchema = new Schema({
    firstName: String,
    lastName: String,
    cookbooks: [{type: Schema.Types.ObjectId, ref: 'Cookbook'}]
});

module.exports = mongoose.model('Author', authorsSchema);










