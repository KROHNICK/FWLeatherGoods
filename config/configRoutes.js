const express = require("express");

const router = express.Router();

const productsRoute = require("../routes/products/products");
router.use("/products", productsRoute);

router.get("/", (req, res) => {
  res.send("API works.");
});

module.exports = router;
