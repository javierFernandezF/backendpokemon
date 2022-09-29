const express = require("express");

const router = express.Router();
const { signIn, login } = require("../controllers/users")

router.post("/login", login)
router.post("/signin", signIn)

module.exports = router;