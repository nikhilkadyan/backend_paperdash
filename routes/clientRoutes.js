const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// get a list of Clients from the database
router.get('/', clientController.getAllClients);

// add a new client to database
router.post('/', clientController.addNewClient);

// update a client in the database
router.put('/:id', clientController.updateClient);

// delete a client in the database
router.delete('/:id', clientController.deleteClient);

module.exports = router;