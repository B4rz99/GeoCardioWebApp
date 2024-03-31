const router = require('express').Router();

router.get('/', (req, res) => {    
    res.send('signIn');
});

module.exports = router;