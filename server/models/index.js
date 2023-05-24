const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')
// import 'regenerator-runtime/runtime'

// const Item = sequelize.define("items", {
//   title: Sequelize.STRING,
//   price: Sequelize.INTEGER,
//   description: Sequelize.TEXT,
//   category: Sequelize.STRING,
//   image: Sequelize.STRING,
// });

const { Pokemon } = require('./Pokemon');
const { User } = require('./User');

Pokemon.belongsTo(User, { foreignKey: 'ownerId' }); // Pokemon table, there will be an ownerId <- FK
User.hasMany(Pokemon, { foreignKey: 'ownerId' });

module.exports = {
  db: sequelize,
  Sequelize,
  Pokemon,
  User
};

// module.exports = {
//   db: sequelize,
//   Item,
// };
