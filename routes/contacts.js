const router = require('express').Router();

const contactsController = require('../controllers/contacts')

router.get('/:id', contactsController.getSingle);

router.get('/', contactsController.getAll);

module.exports = router;