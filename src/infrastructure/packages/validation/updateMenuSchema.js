const Joi = require("joi");

const updateMenuSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  image: Joi.string().allow(null),
});

module.exports = updateMenuSchema;