const mongoose = require('mongoose')
let mongoURL = '';
if(process.env.NODE_ENV === 'production'){
    mongoURL= process.env.CKBK_URL;
} else {
    mongoURL = 'mongodb://localhost/cookbooks_db';
}
mongoose.connect(mongoURL, { useNewUrlParser: true })

mongoose.Promise = Promise;

module.exports = mongoose;
