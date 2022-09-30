const express = require("express");

const router = express.Router();
const { obtener, agregar } = require("../controllers/pokemones");
const { verifyToken } = require("../middleware/jwt-validate");

router.get("/obtener", verifyToken, obtener)
router.post("/agregar",  agregar)

module.exports = router;
