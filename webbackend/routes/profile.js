const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('profile');
});

module.exports = router;