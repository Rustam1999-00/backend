const { Router } = require("express");

const route = Router();

route.get("/auth/heroController", (__, res) => {
  res.render("ejsController/hero.controll.ejs");
});

module.exports = route;
