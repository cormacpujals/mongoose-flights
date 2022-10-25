var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// GET /flights 
router.get('/', flightsCtrl.index);

// GET /movies/new

// POST /movies



module.exports = router;