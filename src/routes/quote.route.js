const { Router } = require("express");

const {
  createQuote,
  editQuote,
  getQuote,
  deleteQuote,
} = require("../controllers/quote.controller");

const route = new Router();

route
  .post("/post/quote", createQuote)
  .get("/get/quote", getQuote)
  .put("/edit/quote/:id", editQuote)
  .delete("/delete/quote/:id", deleteQuote);

module.exports = route;
