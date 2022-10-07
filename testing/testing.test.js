const request = require("supertest");
const app = require("../app");

describe("Probando login ok", () => {
  test("POST", async () => {
    const response = await request(app).post("/users/login").send({
        name: "Pichu",
        password: "agustin",
    });
    expect(response.statusCode).toEqual(200);
    // Extra, en caso de querer utilizarlo poner en string el token.
    // expect(response.body).toEqual({ success: true, message: "Welcome to your Pokedex!", token: token})
  });
});

describe("Probando login !ok", () => {
    test("POST", async () => {
      const response = await request(app).post("/users/login").send({
          name: "Picu",
          password: "agust",
      });
      expect(response.statusCode).toEqual(400);
    });
  });

