const Cars = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const car = await Cars.getById(id);
  if (!car) {
    res.json({ status: 404, message: `car with id ${id} is not found` });
  } else {
    req.car = car;
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  if (!vin || !make || !model || !mileage) {
    res.json({
      status: 400,
      message: `${vin} is missing`,
    });
  } else next();
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const isValidVin = vinValidator(vin);
  if (!isValidVin) {
    res.json({
      status: 400,
      message: `vin ${vin} is invalid`,
    });
  } else next();
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const existingVin = await Cars.getByVin(vin);
  if (existingVin) {
    res.json({
      status: 400,
      message: `vin ${vin} already exists`,
    });
  } else next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
