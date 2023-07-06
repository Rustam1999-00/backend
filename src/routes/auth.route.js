const { Router } = require("express");
const { login, addAdmin } = require("../controllers/auth.controller");

const route = new Router();

route.post("/auth/login", login).post("/add/admin", addAdmin);
route.get("/login", (__, res) => {
  res.render("login");
});

module.exports = route;
