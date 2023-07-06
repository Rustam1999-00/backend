const { Router } = require("express");

const route = Router();

route.get("/auth/quote", (__, res) => {
  res.render("quote");
});

module.exports = route;
