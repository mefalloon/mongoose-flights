const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//add eventlistener and connect here
		
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

