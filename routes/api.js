var express = require('express');
var router = express.Router();

var watson = require('watson-developer-cloud');
var language_translator = watson.language_translator({
  username: '8ac2b58e-5476-4771-a9a3-d6fcf6e3379a',
  password: 'KZnC4Nlxz243',
  version: 'v2'
});

router.get('/:text', function(req, res, next) {
  language_translator.translate({
      text: req.params.text,
      source: 'ja',
      target: 'en'
    }, function(err, translation) {
      if (err)
        return err
      else
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send( translation.translations[0].translation.replace(/\s+/g,'-') );
  });
});

module.exports = router;
