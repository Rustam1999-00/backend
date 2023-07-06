const { Router } = require("express");
const fileUpload = require("../middlewares/fileUpload");
const {
  createClient,
  getClient,
  editClient,
  deleteClient,
} = require("../controllers/client.controller");

const route = new Router();

route
  .post("/post/client", fileUpload, createClient)
  .get("/get/client", getClient)
  .put("/edit/client/:id", fileUpload, editClient)
  .delete("/delete/client/:id", deleteClient);

module.exports = route;
