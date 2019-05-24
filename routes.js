const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// get all events
router.get('/', controllers.getAll);

// add new event
router.post('/', controllers.create);

// get Specifice Event
router.get('/search/title/:title', controllers.searchByTitle); //search first match
router.get('/search/location/:location', controllers.searchByLocation); //search all matches

// edit/update specifice event
router.put('/:id', controllers.updateEvent);

// delete event
router.delete('/:id', controllers.deleteEvent);

module.exports = router;