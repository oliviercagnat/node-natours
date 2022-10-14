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
