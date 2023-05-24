const router = require("express").Router();
const { Pokemon, User } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const { limit = 10, page = 1 } = req.query;
    const pokemons = await Pokemon.findAll(
      {
      limit,
      offset: limit * (page - 1),
    }
    );
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

router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      res.sendStatus(404);
    } else {
      const userId = req.user.id;
      const { name, type } = req.body;
      const newPokemon = await Pokemon.create({ name, type, userId });
      res.send({ name: newPokemon.name, type: newPokemon.type, userId });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatePokemon = await Pokemon.findByPk(id);
    if (!updatePokemon) {
      res.status(404).send(`Pokemon with id ${id} not found`);
      return;
    }
    const userId = req.user.id;
    const { name, type } = req.body;
    await updatePokemon.update({ name: name, type: type });
    res.send(updatePokemon);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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