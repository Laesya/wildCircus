var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.index);
router.get('/:id(\\d+)', userController.show);
router.get('/searchAdmin', userController.searchAdmin);
router.get('/searchSchool', userController.searchSchool);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


module.exports = router;
