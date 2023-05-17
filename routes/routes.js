
const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');
const { getAutos, getImg } = autosController;

router.route('/autos').get(getAutos);
router.route('/autos/img/:id').get(getImg);

module.exports = router;