const Clients = require("../models/Client");

exports.createClient = async (req, res) => {
  const { name, profession, description } = req.body;
  const { imageName: image } = req;

  await Clients.create({
    image,
    name,
    profession,
    description,
  });

  res.status(201).json({ message: "Successfully create Client" });
};

exports.editClient = async (req, res) => {
  const { name, profession, description } = req.body;
  const { imageName: image } = req;
  const { id } = req.params   ;

  await Clients.findByIdAndUpdate(id, {
    $set: {
      image,
      name,
      profession,
      description,
    },
  });

  res.status(201).json({ message: "Success Updated Client" });
};

exports.getClient = async (_, res) => {
  const client = await Clients.find();
  res.status(200).json(client);
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;

  await Clients.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Client" });
};
