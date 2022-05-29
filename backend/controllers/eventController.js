const router = require('express').Router();
const eventModel = require('../models/events/eventModel');
const auth = require('../authentication/auth');


router.post('/', auth.verifyToken, eventModel.newEvent);

router.get('/:userId', auth.verifyToken, eventModel.getAllEventsFromUser);

router.get('/detail/:id', auth.verifyToken, eventModel.getOneEvent);

router.delete('/:id', eventModel.deleteEvent);

module.exports = router;