const { hash } = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "admin",
      email: "admin@email.com",
      password: await hash("33283982", 8),
      isAdmin: true,
    },
  ]);
};