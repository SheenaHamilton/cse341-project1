const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags-['Project Introduction']
    res.send('Sheenas Project 1');
});

router.use('/contacts', require('./contacts'));

module.exports = router;