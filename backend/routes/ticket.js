var express = require('express');
var router = express.Router();
const ticketController = require('../controllers/ticketController')
/* GET tickets listing. */
router.get('/', ticketController.index);
router.get('/:id', ticketController.show);
router.post('/', ticketController.create);
router.put('/:id', ticketController.update);
router.delete('/:id', ticketController.delete);

module.exports = router;
