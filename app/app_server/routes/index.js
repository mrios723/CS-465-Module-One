// CS-465 Module Two
// Travlr Getaways Public Website Routes

const express = require('express');
const router = express.Router();

// Import the traveler controller
const travelerController = require('../controllers/traveler');

// Route for the Travlr homepage
router.get('/', travelerController.index);

// Export routes
module.exports = router;
