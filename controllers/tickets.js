const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create: create,
}

function newTicket(req, res) {
  res.render('tickets/new', { flight: req.params.id} );
}

function create(req, res) {
  const ticket = new Ticket(req.body);
  ticket.save(function(err) {
    if (err) return res.redirect('/tickets/new');
    res.redirect(`/flights/${req.params.id}`);
  });
}
