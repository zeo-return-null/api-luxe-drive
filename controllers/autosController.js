const autosModel = require('../models/autosModel');
const fs = require('fs');
const path = require('path');

const autosController = {
  getAutos: async(req, res) => {
    let autos;
    let err = null;
    try {
      autos = await autosModel.find();
    } catch(err) {
      err = err;
      console.log(err);
    }
    res.json(...autos,)
  },
  getImg: async(req, res) => {
    const img = req.params.id;
    res.sendFie(path.join(__dirname,`../public/img/$img`));
  }
}

module.exports = autosController;