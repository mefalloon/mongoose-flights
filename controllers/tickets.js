const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
	new: newTicket,
	create,
	
}

function newTicket(req, res) {
	res.render('tickets/new', { flightId: req.params.id });
}

function create(req, res) {
	flightId = req.params.id;
	req.body.flight = flightId;
	Ticket.create(req.body, function(err, ticket) {
		res.redirect(`/flights/${flightId}`);
	});
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', {
            title: 'Flight Tickets',
            flight
        });
    });
}