const mongoose = require("mongoose");

const MonsterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    power: { type: String },
    age: { type: Number },
  },
  { timestamps: true, strictQuery: true }
);

const Monster = mongoose.model("Monsters", MonsterSchema);

module.exports = Monster;