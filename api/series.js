const express = require('express');
const seriesRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

seriesRouter.get('/', (req,res,next) => {
  db.all('SELECT * FROM Series', (err, rows) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).send({series: rows});
    }
  });
})

module.exports = seriesRouter;
