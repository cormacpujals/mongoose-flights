const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 5,
  }
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American','Southwest','United','Ryanair', 'WOW Air'],
  },
  airport: {
    type: String,
    default: 'SFO',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO'],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear() + 1;
    },
  },
  inOperation: {
    type: Boolean,
  }, 
  reviews: [reviewSchema],
}, { 
  timestamps: true
});

module.exports = mongoose.model('Flights', flightSchema);