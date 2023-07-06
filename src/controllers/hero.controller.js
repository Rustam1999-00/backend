const Heros = require("../models/Hero");

exports.createHero = async (req, res) => {
  const { description } = req.body;
  const { imageName: image } = req;

  await Heros.create({
    image,
    description,
  });

  res.status(201).json({ message: "Successfully create hero" });
};

exports.editHero = async (req, res) => {
  const { description } = req.body;
  const { imageName: image } = req;
  const { id } = req.params;

  await Heros.findByIdAndUpdate(id, {
    $set: {
      image,
      description,
    },
  });

  res.status(201).json({ message: "Success Updated Hero" });
};

exports.getHero = async (_, res) => {
  const hero = await Heros.find();
  res.status(200).json(hero);
};

exports.deleteHero = async (req, res) => {
  const { id } = req.params;

  await Heros.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Hero" });
};
