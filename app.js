const express = require("express");
const app = express();
const pokemones = require ("./routes/pokemones");
const users = require("./routes/users")
const cors = require("cors")
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pokemones", pokemones);
app.use("/users", users)




app.listen(3000, () => {
    console.log(`corriendo en el puerto ${PORT}`)
})