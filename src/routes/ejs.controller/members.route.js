const { Router } = require("express");

const route = Router();

route.get("/auth/membersController", (__, res) => {
  res.render("ejsController/members.controll.ejs");
});

module.exports = route;
