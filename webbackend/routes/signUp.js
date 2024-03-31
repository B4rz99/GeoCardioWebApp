const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('signUp');
});

module.exports = router;