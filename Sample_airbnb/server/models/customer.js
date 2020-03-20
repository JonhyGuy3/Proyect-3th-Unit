const mongoose = require('mongoose');
const {Schema} = mongoose;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);


const CustomerSchema = new Schema({
    //_id:{},
    Address:{type: String,required: true},
    City:{type: String, required: true},
    Country:{type: String, required: true},
    District: {type: String, required: true},
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    Status: {type:String,required: true}
});

CustomerSchema.plugin(autoIncrement.plugin, {
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

// Los datos se guardaran en la bd
module.exports = mongoose.model('Customer', CustomerSchema);