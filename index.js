const express = require("express");
const bodyParser = require("body-parser");
const monstersRoutes = require("./routes/monsters.route.js");
const { connectDB } = require("./database/database.js");

const app = express();
const port = 8000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/monsters", monstersRoutes);

app.listen(port, function () {
  console.log(`Running on port ${port}!`);
});