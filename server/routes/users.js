const router = require("express").Router();
const { Pokemon, User } = require("../models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      include: [
        {
          model: Pokemon,
          where: { ownerid: id },
        },
      ],
      attributes: { exclude: ["password", "isAdmin"] },
    });
    res.send(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
