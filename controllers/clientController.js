const Client = require('../models/clientModel');

exports.getAllClients = (req, res, next) => {
    Client.find({}).then((clients) => res.send(clients)).catch(next);
};

exports.addNewClient = (req, res, next) => {
    Client.create(req.body).then((client) => res.send(client)).catch(next);
};

exports.updateClient = (req, res, next) => {
    Client.findOneAndUpdate({_id: req.params.id},req.body).then((student) => {
        Client.findOne({_id: req.params.id}).then((student) => res.send(student));
    });
};

exports.deleteClient = (req, res, next) => {
    Client.findOneAndDelete({_id: req.params.id}).then((client) => res.send(client));
};