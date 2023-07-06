const { Router } = require("express");

const route = Router();

route.get("/auth/projectController", (__, res) => {
  res.render("ejsController/project.controll.ejs");
});

module.exports = route;
