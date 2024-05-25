const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/form', formController.createForm);
router.post('/fill-data', formController.addFormData);
router.get('/fill-data', formController.getFormData);

module.exports = router;
