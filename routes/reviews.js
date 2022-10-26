const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// All routes "starts with" /

// POST /flights/:id/reviews
router.post('/flights/:id/reviews', reviewsCtrl.create)

module.exports = router;