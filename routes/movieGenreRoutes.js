const express = require('express');
const router = express.Router();
const movieGenreController = require('../controllers/movieGenreController');

// get a list of Clients from the database
router.get('/', movieGenreController.getAllMovieGenre);

// get one Client from the database
router.get('/:id', movieGenreController.getOneMovieGenre);

// add a new client to database
router.post('/', movieGenreController.addNewMovieGenre);

// update a client in the database
router.put('/:id', movieGenreController.updateMovieGenre);

// delete a client in the database
router.delete('/:id', movieGenreController.deleteMovieGenre);

module.exports = router;