const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// function addOneYear(){
//     let d = new Date();
//     let year = d.getFullYear();
//     let month = d.getMonth();
//     let day = d.getDate();
//     let result = new Date(year + 1, month, day);
//     }
//Compiling a schema into a model 

const destinationSchema = new Schema({
    airport: { 
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
  
});

var flightSchema = new Schema({
	airline: {
		type: String,
		enum: [ 'American', 'Delta', 'Southwest', 'United' ]
	},
	flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},
	departs: {
		type: Date,
		default: function() {
			let d = new Date();
			let year = d.getFullYear();
			let month = d.getMonth();
			let day = d.getDate();
			let result = new Date(year + 1, month, day);
			return result;
		}
	},
	airport: {
		type: String,
		enum:  ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
	},
	destinations: [ destinationSchema ]
});

module.exports = mongoose.model('Flight', flightSchema);

