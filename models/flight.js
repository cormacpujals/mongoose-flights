const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
}, { 
  timestamps: true
});

module.exports = mongoose.model('Flights', flightSchema);