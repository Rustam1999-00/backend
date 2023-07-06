const { Router } = require("express");

const route = Router();

route.get("/auth/clientController", (__, res) => {
  res.render("ejsController/client.controll.ejs");
});

module.exports = route;
