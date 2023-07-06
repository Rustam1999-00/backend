const { Router } = require("express");

const route = Router();

route.get("/auth/admin", (__, res) => {
  res.render("admin");
});

module.exports = route;
