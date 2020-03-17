const mongoose = require('mongoose');
const url = 'mongodb://localhost/sample_airbnb';
mongoose.connect(url)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;