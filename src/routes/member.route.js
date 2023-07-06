const { Router } = require("express");
const {
  createMember,
  getMember,
  editMember,
  deleteMember,
} = require("../controllers/member.controller");
const fileUpload = require("../middlewares/fileUpload");

const route = new Router();

route
  .post("/post/member", fileUpload, createMember)
  .get("/get/members", getMember)
  .put("/edit/members/:id", fileUpload, editMember)
  .delete("/delete/members/:id", deleteMember);

module.exports = route;
