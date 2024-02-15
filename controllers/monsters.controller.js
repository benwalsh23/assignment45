const {
    getMonstersFromRepository,
    updateMonstersInRepository,
    deleteMonstersFromRepository,
    createMonstersInRepository,
  } = require("../repositories/monsters.repositories.js");
  
  const getMonsters = async (req, res) => {
    try {
      const monsters = await getMonstersFromRepository({});
      res.status(200).send(monsters);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getMonsterById = async (req, res) => {
    const { id } = req.params;
    try {
      const monster = await getMonstersFromRepository({ _id: id });
      res.status(200).send(monster);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const createMonster = async (req, res) => {
    const { body } = req;
    try {
      const monster = await createMonstersInRepository(body);
      res.status(201).send(monster);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const monster = await updateMonstersInRepository({ _id: id }, body);
      res.status(200).send(monster);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedMonster = await deleteMonstersFromRepository({ _id: id });
      if (deletedMonster) {
        res.status(204).send();
      } else {
        res.status(404).send("Monster not found");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  module.exports = {
    getMonsters,
    getMonsterById,
    createMonster,
    updateMonster,
    deleteMonster,
  };