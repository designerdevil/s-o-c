var express = require('express');
var needle = require('needle');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var file = __dirname + '../../dist/static/js/main.36b0e48d.js';

  var data = {
    fileDetails: {
      file,
      content_type: 'text/javascript'
    }
  }

  needle.post("http://localhost:3000/processReactMarkup", data, {
    multipart: true
  }, function (err, result, body) {
    const markupResponse = JSON.parse(body);
    if (markupResponse.status === 'success') {
      res.render('index', {
        title: 'SSR Markup from React',
        markup: markupResponse.data
      });
    } else {
      res.render('index', {
        title: 'Something Wrong!',
        markup: 'Markup not generated'
      });
    }
  });

});

module.exports = router;
