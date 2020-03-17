const mongoose = require('mongoose');
const {Schema} = mongoose;

const CustomerSchema = new Schema({
    Address:{type: String,required: true},
    City:{type: String, reuired: true},
    Country:{type: String, reuired: true},
    District: {type: String, required: true},
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    Status: {type:String,required: true}
});


// Los datos se guardaran en la bd
module.exports = mongoose.model('Customer', CustomerSchema);