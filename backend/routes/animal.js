var express = require('express');
var router = express.Router();
const animalController = require('../controllers/animalController')
/* GET animals listing. */
router.get('/', animalController.index);
router.get('/:id(\\d+)', animalController.show);
router.get('/search', animalController.search);
router.post('/', animalController.create);
router.put('/:id', animalController.update);
router.delete('/:id', animalController.delete);

module.exports = router;
