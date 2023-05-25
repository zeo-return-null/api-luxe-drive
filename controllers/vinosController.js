const vinosModel = require('../models/vinosModel');
const fs = require('fs');
const path = require('path');

const vinosController = {
  getVinos: async(req, res) => {
    let vinos;
    let err = null;
    try {
      vinos = await vinosModel.find();
    } catch(err) {
      err = err;
      console.log(err);
    }
    res.json(...vinos,)
  },
  getVinosImg: async(req, res) => {
    const img = req.params.id;
    res.sendFie(path.join(__dirname,`../public/img/$img`));
  }
}

module.exports = vinosController;