const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // // This is only a temporary way to send data, as this data can be accessed by new users
  // // Which is not what anyone would want...
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  const products = adminData.products;

  //? Using the default template engine that we set
  // Passing the data ie products by binding it to a key in the render method
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
  });
});

module.exports = router;
