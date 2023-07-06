const { Router } = require("express");

const route = Router();

route.get("/auth/quoteController", (__, res) => {
  res.render("ejsController/quote.controll.ejs");
});

module.exports = route;
