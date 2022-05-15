const express = require('express');
const router = express.Router();
const movieCrewController = require('../controllers/movieCrewController');

// get a list of Clients from the database
router.get('/', movieCrewController.getAllMovieCrew);

// get one Client from the database
router.get('/:id', movieCrewController.getOneMovieCrew);

// add a new client to database
router.post('/', movieCrewController.addNewMovieCrew);

// update a client in the database
router.put('/:id', movieCrewController.updateMovieCrew);

// delete a client in the database
router.delete('/:id', movieCrewController.deleteMovieCrew);

module.exports = router;