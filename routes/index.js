const router = require('express').Router();

//router.get('/', (req, res) => { res.send('Sheenas Project 1'); });

router.use('/contacts', require('./contacts'));

module.exports = router;