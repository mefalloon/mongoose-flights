const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function addOneYear(){
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let result = new Date(year + 1, month, day);
    }
//Compiling a schema into a model 

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: [ 'American', 'Delta', 'Southwest', 'United' ]
    
    },

    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        default: addOneYear()
    }

});