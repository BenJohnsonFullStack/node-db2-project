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
  return db("cars").insert(newCar);
};

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
};
