const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};


function index(req, res) {
	Flight.find({}, function(err, flights) {
		res.render('flights/index', { flights });
	});
}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', {
				flight,
				tickets
			});
		});
	});
}

function newFlight(req, res) {
    const newFlight = new Flight();
    departDefault = newFlight.departs;
    const departsDate = departDefault.toISOString().slice(0, 16);
    res.render('flights/new', { title: 'Add Flight', departsDate });
}

//
function create(req, res) {
  if (req.body.departs === '') delete req.body.departs;
  Flight.create(req.body);
    console.log(req.body);
    //redirect right back to new.ejs
    res.redirect('flights');
  }



