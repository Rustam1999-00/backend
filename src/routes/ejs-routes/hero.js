const { Router } = require("express");

const route = Router();

route.get("/auth/hero", (__, res) => {
  res.render("hero");
});

module.exports = route;
