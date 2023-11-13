const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/login', controller.login);

router.post('/register', controller.register);

router.put('/:email', controller.update);

router.delete('/:email', controller.delete);

router.get('/all', controller.getAll);


module.exports = router;