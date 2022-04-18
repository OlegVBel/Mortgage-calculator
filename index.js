const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('./app/models/banks');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoURi } = config.app;

mongoose.connect(mongoURi)
  .then(
    () => app.listen(
      appPort,
      () => console.log(`Listnenig on port ${appPort}...`),
    ),
  )
  .catch((err) => console.log(`Error connecting to mongo: ${mongoURi}`, err));

app.use(express.static(path.join(__dirname, './client')));
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/index.html`, `${__dirname}/client/calc.html`));
