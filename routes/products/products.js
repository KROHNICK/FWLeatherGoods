const express = require("express");
const router = express.Router();
const db = require("../../database/dbConfig");

router.get("/", (req, res) => {
  db("products")
    .then(products => res.status(200).send(products))
    .catch(err => console.log(err));
});

module.exports = router;
