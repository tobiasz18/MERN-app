const Event = require('./schema/model');
const uuid = require('uuid/v4');

exports.getAll = async (req, res, next) => {
  try {
    const events = await Event.find({})

    res.json(events);

  } catch (error) {
    res.status(500).send(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const event = new Event(req.body)
    event.id = uuid().split('-')[0];
    event.removeFlag = true;
    await event.save()
    
    res.json(event)

  } catch (error) {
    res.status(500).send(error);
  }
}

exports.searchByTitle = async (req, res, next) => {
  try {
    const singleEvent = await Event.findOne({title:
      { $regex: new RegExp("^" + req.params.title.toLowerCase(), "i") } }).exec()


    res.json(singleEvent)

  } catch (error) {
    res.status(500).send(error);
  }
}

exports.searchByLocation = async (req, res, next) => {
  try {
    const singleEvent = await Event.find({location: 
      { $regex: new RegExp("^" + req.params.location.toLowerCase(), "i") } }).exec()

    res.json(singleEvent)

  } catch (error) {
    res.status(500).send(error);
  }
}

exports.updateEvent = async (req, res, next) => {
  try {
    await Event.updateOne({id: req.params.id}, req.body).exec()

    Event.findOne({id: req.params.id}).exec()
    .then(resp => res.json(resp))

  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getEvenById = async (req, res) => {
  try {
   const event = await Event.findOne({id: req.params.id}).exec()

    res.json(event)
    
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.deleteEvent = async (req, res, next) => {
  try {
    const deleted = await Event.deleteOne({id: req.params.id}).exec()
    res.json(deleted)

  } catch (error) {
    res.status(500).send(error)
  }
}