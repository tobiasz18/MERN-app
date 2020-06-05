require('dotenv').config();
module.exports =  {
  port: process.env.PORT || 5000,
  mongoUrl: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds155396.mlab.com:55396/events_db`
}