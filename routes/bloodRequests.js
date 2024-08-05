// routes/bloodRequests.js

const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/BloodRequest');
const authMiddleware = require('../middlewares/authMiddleware');// Assuming you have an auth middleware for protected routes
// Create a new blood request
router.post('/api/blood-requests', authMiddleware, async (req, res) => {
  const { bloodType, location, donorsNeeded, cause } = req.body;

  try {
    const newRequest = new BloodRequest({
      bloodType,
      location,
      donorsNeeded,
      cause,
      requestedBy: req.user.id, // Assuming the user ID is available in the req.user object
    });
console.log(newRequest)
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
