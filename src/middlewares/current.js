const Admins = require("../models/Admin");

const currentUser = async (req, res, next) => {
  const admin = await Admins.findById(req.verified.id);

  req.user = admin;

  next();
};
module.exports = currentUser;
