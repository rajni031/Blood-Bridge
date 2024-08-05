// models/BloodRequest.js

const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  bloodType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  donorsNeeded: {
    type: Number,
    required: true,
  },
  cause: {
    type: String,
    required: true,
  },
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

const BloodRequest = mongoose.model('BloodRequest', bloodRequestSchema);

module.exports = BloodRequest;
