var mongoose = require('mongoose');

var PopulationSchema = mongoose.Schema({
    name: String,
    value: Number
});

module.exports = mongoose.model("Population", PopulationSchema);
