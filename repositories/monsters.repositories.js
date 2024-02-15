const Monster = require("../models/monsters.model.js");

const getMonstersFromRepository = async (query) => {
  try {
    const monsters = await Monster.find(query);
    return monsters;
  } catch (e) {
    throw new Error("Error while fetching monsters");
  }
}

const updateMonstersInRepository = async (query, update) => {
  try {
    const monsters = await Monster.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return monsters;
  } catch (e) {
    throw new Error("Error while updating monsters");
  } 
}

const deleteMonstersFromRepository = async (query) => {
  try {
    const monsters = await Monster.findOneAndDelete({ ...query });
    return monsters;
  } catch (e) {
    throw new Error("Error while deleting a monster");
  }
}

const createMonstersInRepository = async (payload) => {
  try {
    const newMonster = new Monster(payload);
    const savedMonster = await newMonster.save();
    return savedMonster;
  } catch (e) {
    throw new Error("Error while creating a monster");
  }
}

module.exports = {
  getMonstersFromRepository,
  updateMonstersInRepository,
  deleteMonstersFromRepository,
  createMonstersInRepository
};