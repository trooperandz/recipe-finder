var express = require('express');
var router = express.Router();

// ALL requests (handled by react router)
router.get('*', (req, res, next) => {
  res.render('index');
});

module.exports = router;
