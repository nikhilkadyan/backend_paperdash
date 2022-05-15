const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// get a list of Clients from the database
router.get('/', movieController.getAllMovie);

// get one Client from the database
router.get('/:id', movieController.getOneMovie);

// add a new client to database
router.post('/', movieController.addNewMovie);

// update a client in the database
router.put('/:id', movieController.updateMovie);

// delete a client in the database
router.delete('/:id', movieController.deleteMovie);

module.exports = router;