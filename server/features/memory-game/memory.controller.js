'use strict'

const rp = require('request-promise');

module.exports = {

  getPonies: (req, res) => {
    
    let picIds = req.params.id;

    let options = {
      uri: 'http://ponyfac.es/api.json/' + picIds,
      json: true
    };
    rp(options).then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

};