module.exports = {
    new: newFlight
};
//create view
function newFlight(req, res) {
    res.render('flights/new');
}

