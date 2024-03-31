const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('root');
});

module.exports = router;