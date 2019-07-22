var express = require('express');
var router = express.Router();

const staffController = require('../controllers/staffController')
/* GET staffs listing. */
router.get('/', staffController.index);
router.get('/:id(\\d+)', staffController.show);
router.get('/search', staffController.search);
router.post('/', staffController.create);
router.put('/:id', staffController.update);
router.delete('/:id', staffController.delete);

module.exports = router;
