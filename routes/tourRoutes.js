const express = require('express');

// Controller
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controllers/tourController');

const router = express.Router();

// Param middleware
// It only runs when id is present in the URL
router.param('id', checkID);

// Create a checkBody middleware

// Check if body contains the name and price property

// If not, send back 400 (bad request)

// Add it to the post handler stack

router
  .route('/')
  .get(getAllTours)
  .post(checkBody, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
