var mongoose = require('mongoose');

var platSchema = new mongoose.Schema({

});

const Plat = mongoose.model("Plat",platSchema);

module.exports = Plat;