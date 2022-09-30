const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signIn = async (req, res) => {
    try {
      const { mail, name, password } = req.body;
  
      const user = await db.query("select * from users where mail = $1", [mail]);
  
      if (user.rowCount > 0) {
        return res.status(400).json({
          data: [],
          message: "This email is already used.",
          success: false,
        });
      }
  
      const salt = await bcrypt.genSalt(10);
  
      const passwordHashed = await bcrypt.hash(password, salt);
      const newUser = {
        mail,
        name,
        password: passwordHashed,
      };
  
      await db.query(
        "insert into users(mail, name, password) values($1, $2, $3)",
        [mail, name, passwordHashed]
      );
  
      return res
        .status(200)
        .json({ data: [newUser], message: "Congratulations! Now you are a member of Pokedex Community.", success: true });
  
    } catch (error) {
      return res
          .status(500)
          .json({message: "Server error.", error:error})
    }
  };


const login = async (req, res) => {
    try {
      const { name, password } = req.body;
  
      const user = await db.query("select * from users where name = $1", [name]);
  
      if (user.rowCount === 0) {
        return res.status(400).json({
          data: [],
          message: "User not found. Please check your username and try again.",
          success: false,
        });
      }
  
      const contrasenhaValidada = await bcrypt.compare(
        password,
        user.rows[0].password
      );
  
      if (!contrasenhaValidada) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid password. Please try again." });
      }
  
      const token = jwt.sign({
        name: name,
        mail: user.rows[0].mail
      }, "EstaEsLaClaveSecretaDeLaMejorPokedexDelBootcamp" );



      return res.status(200).json({ success: true, message: "Welcome to your Pokedex!", token: token});
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { signIn, login };
