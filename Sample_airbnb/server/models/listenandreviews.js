const mongoose = require('mongoose');
const {Schema} = mongoose;


const listenandreviews = new Schema({
    //_id:{},
    name:{type: String,required: true},
    price:{type: Number, required: true},
    property_type:{type: String, required: true},
    idcustomer: {type: Number, required: true},
});

module.exports = mongoose.model('listenandreviews', listenandreviews);