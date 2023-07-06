const Members = require("../models/Member");

exports.createMember = async (req, res) => {
  const { name, position, facebook, twitter, instagram } = req.body;
  const { imageName: image } = req;

  await Members.create({
    image,
    name,
    position,
    facebook,
    twitter,
    instagram,
  });
  console.log(req.body);

  res.status(201).json({ message: "Successfully create members" });
};

exports.editMember = async (req, res) => {
  const { name, position, facebook, twitter, instagram } = req.body;
  const { imageName: image } = req;
  const { id } = req.params;

  await Members.findByIdAndUpdate(id, {
    $set: {
      image,
      name,
      position,
      facebook,
      twitter,
      instagram,
    },
  });

  res.status(201).json({ message: "Success Updated Member" });
};

exports.getMember = async (_, res) => {
  const member = await Members.find();
  res.status(200).json(member);
};

exports.deleteMember = async (req, res) => {
  const { id } = req.params;

  await Members.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Member" });
};
