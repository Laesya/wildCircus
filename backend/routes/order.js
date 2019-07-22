var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')
/* GET orders listing. */
router.get('/', orderController.index);
router.get('/:id', orderController.show);
router.post('/', orderController.create);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.delete);

module.exports = router;
