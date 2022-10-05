const db = require("../db/index");
const yup = require("yup");

const obtener = async (req, res) => {
  try {
    const pokemones =
      await db.query(`select p.id, p.idpokemon, p.name, p.img, p.type, p.type2, p.weight, p.height, p.description,
        p.hp, p.atk, p.def, p.satk, p.sdef, p.spd, p.bckcolor, p.bckcolor2, d.move1, d.move2   from "datamoves" d 
        join "poketabla" p on d.idpokemondatamoves = p.idpokemon`);
    return res.status(200).json({ data: pokemones.rows });
  } catch (error) {
    console.error(error);
  }
};


const agregar = async (req, res) => {
  try {
    const {
      idpokemon,
      name,
      img,
      type,
      type2,
      weight,
      height,
      description,
      hp,
      atk,
      def,
      satk,
      sdef,
      spd,
      bckcolor,
      bckcolor2,
      move1,
      move2,
    } = req.body;

    let newPokemon = {
      idpokemon,
      name,
      img,
      type,
      type2,
      weight,
      height,
      description,
      hp,
      atk,
      def,
      satk,
      sdef,
      spd,
      bckcolor,
      bckcolor2,
    };

    let newMoves = {
      idpokemon,
      move1,
      move2,
    };

    let schema = yup.object().shape({
      idpokemon: yup.number().integer().required().positive(),
      name: yup.string().required(),
      img: yup.string().required(),
      type: yup.string().required(),
      type2: yup.string(),
      weight: yup.number().required().positive(),
      height: yup.number().required().positive(),
      description: yup.string().required(),
      hp: yup.number().integer().required().positive().max(200),
      atk: yup.number().integer().required().positive().max(200),
      def: yup.number().integer().required().positive().max(200),
      satk: yup.number().integer().required().positive().max(200),
      sdef: yup.number().integer().required().positive().max(200),
      spd: yup.number().integer().required().positive().max(200),
      bckcolor: yup.string().required(),
      bckcolor: yup.string(),
    });

    schema.validate(newPokemon).catch(function (err) {
      err.name;
      err.errors;
      if (err.errors) {
        return res.status(400).json({
          data: err.errors,
          message: "Dates are invalid",
          success: false,
        });
      }
    });

    //Este control se deja porque revisa en la base de datos que no exista el id de pokemon.

    const verifyIdPokemon = await db.query(
      "select * from poketabla where idpokemon = $1",
      [idpokemon]
    );

    if (verifyIdPokemon.rowCount > 0) {
      return res.status(400).json({
        data: [],
        message: "Id number is already used.",
        success: false,
      });
    }

    await db.query(
      "insert into poketabla (idpokemon, name, img, type, type2, weight, height, description, hp, atk, def, satk, sdef, spd, bckcolor, bckcolor2) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)",
      [
        idpokemon,
        name,
        img,
        type,
        type2,
        weight,
        height,
        description,
        hp,
        atk,
        def,
        satk,
        sdef,
        spd,
        bckcolor,
        bckcolor2,
      ]
    );

    await db.query(
      "insert into datamoves(idpokemondatamoves, move1, move2) values($1,$2,$3)",
      [idpokemon, move1, move2]
    );

    return res
      .status(200)
      .json({ data: [newPokemon, newMoves], message: "Success" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { obtener, agregar };
