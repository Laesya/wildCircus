var express = require('express');
var router = express.Router();
const showController = require('../controllers/showController')
/* GET shows listing. */
router.get('/', showController.index);
router.get('/:id(\\d+)', showController.show);
router.get('/search', showController.search);
router.post('/', showController.create);
router.put('/:id', showController.update);
router.delete('/:id', showController.delete);

module.exports = router;
