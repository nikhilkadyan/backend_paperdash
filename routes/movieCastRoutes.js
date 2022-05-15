const express = require('express');
const router = express.Router();
const movieCastController = require('../controllers/movieCastController');

// get a list of Clients from the database
router.get('/', movieCastController.getAllMovieCast);

// get one Client from the database
router.get('/:id', movieCastController.getOneMovieCast);

// add a new client to database
router.post('/', movieCastController.addNewMovieCast);

// update a client in the database
router.put('/:id', movieCastController.updateMovieCast);

// delete a client in the database
router.delete('/:id', movieCastController.deleteMovieCast);

module.exports = router;