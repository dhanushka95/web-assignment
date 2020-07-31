const express = require('express');
const router = express.Router();
const informationGetC = require('../controllers/informationGetC');
router.get(
    '/get',
    informationGetC.dictionaryDataGet

);


module.exports =router;

