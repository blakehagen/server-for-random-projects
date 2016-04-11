'use strict'

// REQUIRES //
const babel   = require('babel-core').transform('code');
const express = require('./server/config/express.js');

// RUN EXPRESS //
const app = express();

// API TEST ROUTE //
app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});

// API ROUTES FOR EACH PROJECT //

// MEMORY GAME //
require('./server/features/memory-game/memory.routes.js')(app);

// PORT //
const port = process.env.PORT || 4400;
app.listen(port, () => {
  console.log('Check me out on port', port);
});



