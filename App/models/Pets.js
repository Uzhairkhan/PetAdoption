const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  currentCity: {
    type: String,
    required: true,
  },
  res_place: {
    type: String,
    required: true,
  },
  is_adopted: {
    type: Boolean,
    default: false,
  },
  animal_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  breed: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Pets = mongoose.model("Pets", petsSchema);
