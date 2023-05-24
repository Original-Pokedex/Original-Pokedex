const express = require("express");
const router = express.Router();
const{check, validationResult} = require("express-validator"); 

// different model routers
// router.use('/items', require('./items'));
router.use('/pokemons', require('./pokemons'));
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
});

module.exports = router;
