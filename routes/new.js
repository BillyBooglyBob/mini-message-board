var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('new')
});

router.post('/', (req, res) => {
  const text = req.body.messageText
  const author = req.body.authorText
  const message = {
    text: text,
    user: author
  }

  req.app.locals.messages.push(message)

  res.redirect('/')
})

module.exports = router;
