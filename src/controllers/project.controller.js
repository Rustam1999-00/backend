const Project = require("../models/Project");

//Post
const create = (req, res) => {
  const { name, view, link, isCompleted } = req.body;
  const { imageName: image } = req;

  Project.create({ image, name, view, link, isCompleted });
  res.status(201).json({ message: "OK" });
};
//Get
const getALL = async (req, res) => {
  const projects = await Project.find();
  res.status(201).json({ message: "OK", data: projects });
};
//Put
const putProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, view, link, isCompleted } = req.body;
    const { imageName: image } = req;
    await Project.findByIdAndUpdate(id, {
      $set: {
        image,
        name,
        view,
        link,
        isCompleted,
      },
    });
    res.status(202).json({ message: "Updated" });
  } catch (error) {
    console.log(error.message);
  }
};
// Delete
const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(202).json({ message: "Deleted" });
};
// Get// isCompleted = true
const getTrue = async (req, res, next) => {
  const projects = await Project.find();
  const isCompleted = projects.filter((el) => el.isCompleted == true);
  res.status(201).json({ message: "OK", data: isCompleted });
};

// Get// isCompleted = true

const getFalse = async (req, res, next) => {
  const projects = await Project.find();
  const isCompleted = projects.filter((el) => el.isCompleted == false);
  res.status(201).json({ message: "OK", data: isCompleted });
};
//Post view
const viewPost = async (req, res) => {
  const { id } = req.params;

  let data = await Project.findById(id);
  if (data.view >= 0) {
    let view = data.view;
    view += 1;
    await Project.findByIdAndUpdate(id, {
      $set: {
        view,
      },
    });
  }
  res.status(200).json({ message: "OK", data: data });
};
const renderModal = async (_, res) => {
  res.render("singlePage");
};

module.exports = {
  create,
  getALL,
  putProject,
  deleteProject,
  getTrue,
  getFalse,
  viewPost,
  renderModal,
};

