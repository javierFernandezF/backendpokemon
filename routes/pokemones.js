const express = require("express");

const router = express.Router();
const { obtener, agregar } = require("../controllers/pokemones");
const { verifyToken } = require("../middleware/jwt-validate");
const { validate } = require("../middleware/yup-validate");

router.get("/obtener", verifyToken, obtener);
router.post("/agregar", verifyToken, validate, agregar);

module.exports = router;
