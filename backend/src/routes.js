const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentControler = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents',IncidentControler.create);
routes.get('/incidents',IncidentControler.index);
routes.delete('/incidents/:id',IncidentControler.delete);

module.exports = routes;