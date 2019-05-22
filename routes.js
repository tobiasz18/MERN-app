const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// get all events
router.get('/', controllers.getAll);

// add new event
router.post('/', controllers.create);

// get Specifice Event
router.get('/:id', controllers.getSpecificeEvent);

// edit/update specifice event
router.put('/:id', controllers.updateEvent);

// delete event
router.delete('/:id', controllers.deleteEvent);

module.exports = router;