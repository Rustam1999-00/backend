const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  createHero,
  getHero,
  editHero,
  deleteHero,
} = require("../controllers/hero.controller");

const route = new Router();

route
  .post("/post/hero", fileUpload, createHero)
  .get("/get/hero", getHero)
  .put("/edit/hero/:id", fileUpload, editHero)
  .delete("/delete/hero/:id", deleteHero);

module.exports = route;