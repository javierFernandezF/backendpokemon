const express = require("express");

const router = express.Router();
const { obtener, agregar } = require("../controllers/pokemones")

router.get("/obtener", obtener)
router.post("/agregar", agregar)

module.exports = router;
