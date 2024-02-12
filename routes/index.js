var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: req.app.locals.messages });
});

module.exports = router;
