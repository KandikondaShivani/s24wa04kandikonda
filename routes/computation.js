var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) 
{
  let x = Math.random()*50+1;
  let y = Math.trunc(x);
  res.send(`trunc of ${x} is ${y}`);
});

module.exports = router;