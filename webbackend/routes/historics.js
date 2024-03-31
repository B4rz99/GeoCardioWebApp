const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('historics');
});

module.exports = router;