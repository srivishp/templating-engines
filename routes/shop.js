const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // // This is only a temporary way to send data, as this data can be accessed by new users
  // // Which is not what anyone would want...
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  //? Using the default template engine that we set
  res.render("shop");
});

module.exports = router;
