//import connection
const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;


const cookbooksSchema = new Schema({
    title: String,
    yearPublished: 'Number'
});

module.exports = mongoose.model('Cookbook', cookbooksSchema);


