const express = require("express");
const koders = require("./../usecases/koders");

const router = express.Router();

router.get("/", async (request, response) => {
  const allKoders = await koders.getAll();

  response.json({
    success: true,
    data: allKoders,
  });
});

router.get("/:id", async (request, response) => {
  const koderById = await koders.getById(request.params.id);

  response.json({
    success: true,
    data: koderById,
  });
});

router.post("/", async (request, response) => {
  const { name, age } = request.body;
  const koderCreated = await koders.create(name, age);

  response.json({
    success: true,
    message: "Koder Creado",
    data: koderCreated,
  });
});

router.delete("/:id", async (request, response) => {
  const koderDeleted = await koders.deleteById(request.params.id);
  response.json({
    success: true,
    message: "Koder eliminado",
    data: koderDeleted,
  });
});

router.patch("/:id", async (request, response) => {
  // recibe name y age de <body>
  const { name, age } = request.body;
  const { id } = request.params;
  const koderUpdate = await koders.updateById(id, name, age);

  response.json({
    success: true,
    message: "Koder actualizado",
    data: koderUpdate,
  });
});

module.exports = router;
