const express = require('express');
const router  = express.Router();
const passport = require('passport');

var Shopper = require('../models/client');

// passport.authenticate(['basic', 'digest'], { session: false })
   
router.post('/', (req, res, next) => {
  var client = new Client(req.body.client);
  client.save(
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
      res.send({ client });
    }
  );
});

router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Client.find({}, 'looking_for styles budget hours occupation', function (err, shoppers) {
    if (err) {
      res.status(500).send(err)
    }
    res.send({ shopper });
  });
});

router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Client.findOne({ _id: req.params.uid }, 'looking_for styles budget hours occupation', function (err, shoppers) {
    if (err) {
      res.status(500).send(err)
    }
    res.send({ shopper });
  });
});

module.exports = router;