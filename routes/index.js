'use strict';

var Population = require('../models/Population.js');

function index (req, res, config) {
  Population.find({}).select('name value -_id').sort({'value': -1}).limit(5).exec(function (err, population) {
    if (err) return next(err);
    // chart JSON data
    var json = {
      chart: {
        type: "pie",
        title: 'Live Population Update',
        data: population,
        container: "container"
      }
    };
    res.template('index.ejs', { title: 'Citizenry', chart: JSON.stringify(json) });
  });
}

module.exports = index;