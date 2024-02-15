const express = require("express");
const controllers = require("../controllers/monsters.controller");
const router = express.Router();

router.get("/", controllers.getMonsters);
router.get("/:id", controllers.getMonsterById); 
router.post("/", controllers.createMonster); 
router.patch("/:id", controllers.updateMonster);
router.delete("/:id", controllers.deleteMonster);

module.exports = router;