const {sequelize} = require('./db/db');
const seed = require('./seedFn');

seed()
  .then(() => {
    console.log('Seeding success!');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    sequelize.close();
  });
  