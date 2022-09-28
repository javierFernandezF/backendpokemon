const db = require("../db/index");

const obtener = async (req, res) => {
    try {
        const pokemones = await db.query(`select p.id, p.idpokemon, p.name, p.img, p.type, p.type2, p.weight, p.height, p.description,
        p.hp, p.atk, p.def, p.satk, p.sdef, p.spd, p.bckcolor, p.bckcolor2, d.move1, d.move2   from "datamoves" d 
        join "poketabla" p on d.idpokemondatamoves = p.idpokemon`)
        return res
        .status(200)
        .json({ data: pokemones.rows })
    } catch (error) {
        console.error(error)
    }
}

const agregar = () => {
    
}

module.exports = { obtener, agregar }