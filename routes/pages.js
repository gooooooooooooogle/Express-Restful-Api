const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/main", function (req, res, next) {
  const o = {
    main: 'master page'
  }
  res.render('main', o);
});


module.exports = router;