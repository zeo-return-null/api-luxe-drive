const mongoose = require('mongoose');

const vinosSchema = new mongoose.Schema({
  vinos: { type: Array, required:true },
  servicios: { type: Array, required:true },
})

const Vinos = mongoose.model('vinos', vinosSchema);

module.exports = Autos;