const mongoose = require('mongoose');

const autosSchema = new mongoose.Schema({
  autos: { type: Array, required:true },
  servicios: { type: Array, required:true },
})

const Autos = mongoose.model('autos', autosSchema);

module.exports = Autos;