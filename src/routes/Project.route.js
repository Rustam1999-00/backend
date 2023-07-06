const { Router } = require("express");
const {
  create,
  getALL,
  putProject,
  deleteProject,
  getTrue,
  getFalse,
  viewPost,
  renderModal,
} = require("../controllers/project.controller");
const fileUploads = require("../middlewares/fileUpload");

const router = new Router();

router.post("/post/project", fileUploads, create);
router.get("/get/project", getALL);
router.get("/get/project/true", getTrue);
router.get("/get/project/false", getFalse);
router.put("/edit/project/:id", fileUploads, putProject);
router.delete("/delete/project/:id", deleteProject);
router.post("/view/project/:id", viewPost);
router.get("/:id", renderModal);
module.exports = router;
