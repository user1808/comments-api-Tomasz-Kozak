import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

import { sequelize } from './db/sequelize'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing routes from dir ./routes
app.use('/', routes);
console.log(`Listening: http://localhost:${process.env.APP_PORT || '3000'}/`);

sequelize.sync()
  .then(() => {
    console.log("Synced database.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  }
);

module.exports = app;
