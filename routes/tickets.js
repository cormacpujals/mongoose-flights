var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// TODO - confirm that GET shows a ticket form and POST saves ticket data

// GET /flights/:id/tickets/new
router.get('/:id/tickets/new', ticketsCtrl.new)

// POST /flights
router.post('/:id/tickets', ticketsCtrl.create);

module.exports = router;
