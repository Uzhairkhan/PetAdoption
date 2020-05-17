const Pets = require("../models/Pets");

module.exports.list = (req, res) => {
  Pet.find()
    .populate("animal_type breed", ["name"])
    .then((pets) => res.json(pets))
    .catch((err) => res.send(err));
};

module.exports.create = (req, res) => {
  const pet = new Pet(req.body);
  pet
    .save()
    .then((pet) => res.json(pet))
    .catch((err) => res.send(err));
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Pet.findOne({ _id: id })
    .populate("animal_type breed", ["name"])
    .select("name age gender city res_place")
    .then((pet) => res.json(pet))
    .catch((err) => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Pet.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((pet) => res.json(pet))
    .catch((err) => res.send(err));
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Pet.findOneAndDelete({ _id: id })
    .then((pet) => res.json(pet))
    .catch((err) => res.send(err));
};
