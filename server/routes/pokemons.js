const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { Pokemon, User } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const { limit = 10, page = 1 } = req.query;
    const pokemons = await Pokemon.findAll();
    //   {
    //   limit,
    //   offset: limit * (page - 1),
    // }
    res.send(pokemons);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pokemon = await Pokemon.findByPk(id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password", "isAdmin"] },
        },
      ],
    });
    res.send(pokemon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/",
  [
    check("name").notEmpty(),
    check("type").notEmpty(),
    check("description").notEmpty(),
    check("image").notEmpty(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({ error: errors.array() });
      } else {
        const pokemonToAdd = await Pokemon.create(req.body);
        res.send(pokemonToAdd);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  [
    check("name").notEmpty(),
    check("type").notEmpty(),
    check("description").notEmpty(),
    check("image").notEmpty(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({ error: errors.array() });
      } else {
        const num = req.params.id;
        const pokemonToUpdate = await Pokemon.update(req.body, {
          where: { id: num },
        });
        const updatedPokemon = await Pokemon.findByPk(num);
        res.send(updatedPokemon);
      }
    } catch (err) {
      console.error(err);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletePokemon = await Pokemon.findByPk(id);
    if (!deletePokemon) {
      res.status(404).send(`Pokemon with id ${id} not found`);
      return;
    }
    await Pokemon.destroy({ where: { id } });
    res.send(deletePokemon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
