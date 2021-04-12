const Client = require('../models/clientModel');
const base = require('./baseController');

exports.getAllClients = base.getAll(Client);
exports.getOneClient = base.getOne(Client);
exports.addNewClient = base.createOne(Client);
exports.updateClient = base.updateOne(Client);
exports.deleteClient = base.deleteOne(Client);