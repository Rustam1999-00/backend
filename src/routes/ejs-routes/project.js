const { Router } = require("express");

const route = Router();

route.get("/auth/project", (__, res) => {
  res.render("project");
});

module.exports = route;
