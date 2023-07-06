const { Router } = require("express");

const route = Router();

route.get("/auth/client", (__, res) => {
  res.render("client");
});

module.exports = route;
