const yup = require("yup");

const validate = async (req, res, next) => {
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
      move1,
      move2,
    };

    let schema = yup.object().shape({
      idpokemon: yup.number().integer().positive().required(),
      name: yup.string().required(),
      img: yup.string().required(),
      type: yup.string().required(),
      type2: yup.string(),
      weight: yup.number().positive().required(),
      height: yup.number().positive().required(),
      description: yup.string().required(),
      hp: yup.number().integer().positive().max(200).required(),
      atk: yup.number().integer().positive().max(200).required(),
      def: yup.number().integer().positive().max(200).required(),
      satk: yup.number().integer().positive().max(200).required(),
      sdef: yup.number().integer().positive().max(200).required(),
      spd: yup.number().integer().positive().max(200).required(),
      bckcolor: yup.string().required(),
      bckcolor: yup.string(),
      move1: yup.string(),
      move2: yup.string(),
    });

    await schema
      .validate(newPokemon)
      .then(() => next())
      .catch(function (err) {
        err.name;
        err.errors;

        return res
          .json({ data: [], message: err.errors, success: false })
          .status(400);
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { validate };
