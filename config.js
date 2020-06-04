require('dotenv').config();
module.exports =  {
  port: process.env.PORT || 5000,
  mongoUrl: `mongodb://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASSWORD}@ds155396.mlab.com:55396/events_db`
}