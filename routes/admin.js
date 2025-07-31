const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];
/**
 * # A template engine in Node.js allows for the rendering of dynamic content on the server-side by combining static HTML templates with dynamic data.
 * # Instead of sending raw HTML, the server processes templates that contain placeholders or logic for data injection,
 * # resulting in a fully rendered HTML page sent to the client.
 * -> Examples: EJS, Pug (Jade), Handlebars
 */
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("Title:", req.body.title);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
