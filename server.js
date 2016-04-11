'use strict'

// REQUIRES //
const babel = require('babel-core').transform('code');
const express = require('./server/config/express.js');

// RUN EXPRESS //
const app = express();

// PORT //
const port = process.env.PORT || 4400;
app.listen(port, () => {
  console.log('Check me out on port', port);
});



