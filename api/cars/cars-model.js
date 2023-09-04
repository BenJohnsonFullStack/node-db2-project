const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first();
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = async (newCar) => {
  // DO YOUR MAGIC
  const stuff = await db("cars").insert(newCar);
  console.log(stuff);
};

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
};
