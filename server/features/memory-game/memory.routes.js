'use strict'

const memoryCtrl = require('./memory.controller.js');

module.exports = (app) => {
  app.route('/api/v1/memory/:id')
    .get(memoryCtrl.getPonies) // GET PONY PICS FOR MEMORY GAME
};