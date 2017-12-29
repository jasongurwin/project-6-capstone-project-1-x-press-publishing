const express = require('express');
const artistsRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');
// const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase,
//   deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db.js');

// const checkMillionDollarIdea = require('./checkMillionDollarIdea.js')

artistsRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM Artist WHERE Artist.is_currently_employed = 1',
    (err, artists) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({artists: artists});
      }
    });
});


module.exports = artistsRouter;
