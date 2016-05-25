var express = require('express'),
  router = express.Router(),
  directions = require('./map')
  mongoose = require('mongoose'),
  Location = mongoose.model('Location');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Bus Meme Generator'});
});

router.get('/map/:startAddressLat/:startAddressLong/:destAddressLat/:destAddressLong', function(req, res, next){
  var responses = directions(req.params.startAddressLat, req.params.startAddressLong,req.params.destAddressLat, req.params.destAddressLong).then(function(response){
    res.json(response);
  });
});