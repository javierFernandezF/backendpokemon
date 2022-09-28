const express = require("express");
const app = express();
const pokemones = require ("./routes/pokemones");
const PORT = 3000;

app.use("/pokemones", pokemones)

app.listen(3000, () => {
    console.log(`corriendo en el puerto ${PORT}`)
})