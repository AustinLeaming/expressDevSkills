var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos');
/* GET users listing. */

module.exports = router;

router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);