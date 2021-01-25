const express = require("express");
const auth = require("./../usecases/auth");

const router = express.Router();

//Función POST / User creado
router.post("/signup", async (request, response) => {
  const { email, password } = request.body;
  const userCreated = await auth.signup(email, password);

  response.json({
    success: true,
    message: "User creado",
    data: userCreated,
  });
});

//Función GET
router.get("/login", async (request, response) => {
  const { email, password } = request.body;
  const isLogIn = await auth.login(email, password);

  if (!isLogIn) {
    response.status(401); // Unauthorized
    response.json({
      success: false,
      message: "Invalid data",
    });
  } else {
    response.json({
      success: true,
      message: "User logged in",
    });
  }
});

module.exports = router;
