const { Router } = require("express");

const route = Router();

route.get("/auth/members", (__, res) => {
  res.render("members");
});

module.exports = route;
