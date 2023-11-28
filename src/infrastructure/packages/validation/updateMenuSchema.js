const Joi = require("joi");

const updateMenuSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
}).unknown(true);

module.exports = updateMenuSchema;