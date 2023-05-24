
const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');
const vinosController = require('../controllers/vinosController');
const { getAutos, getImg } = autosController;
const { getVinos, getVinosImg } = vinosController;

router.route('/autos').get(getAutos);
router.route('/autos/img/:id').get(getImg);
router.route('/vinos').get(getVinos);
router.route('/vinos/img/:id').get(getVinosImg);

module.exports = router;