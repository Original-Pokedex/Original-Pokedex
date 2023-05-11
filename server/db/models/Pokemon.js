const { Sequelize, sequelize } = require("./db");

const Pokemon = sequelize.define("pokemon", {
  name: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://mocra.org/wp-content/uploads/2016/07/default.jpg",
  },
});

module.exports = { Pokemon };
