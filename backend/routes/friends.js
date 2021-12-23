const express = require('express');
const router = express.Router();
const controller = require("../controllers/friends.controller");

router.route('/')
  .get(controller.list);


module.exports = router;