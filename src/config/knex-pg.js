require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV postgres://amyroot:nW6y8S51OZjlrkUdxERIgABjoJWVuDBU@dpg-cjeft00cfp5c73dm12d0-a.oregon-postgres.render.com/auxiliar
      host: "dpg-cjeft00cfp5c73dm12d0-a.oregon-postgres.render.com",
      user: "amyroot",
      password: "nW6y8S51OZjlrkUdxERIgABjoJWVuDBU",
      database: "auxiliar",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
