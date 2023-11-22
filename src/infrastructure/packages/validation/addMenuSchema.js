const Joi = require("joi");

const addMenuSchema = Joi.object({
  name: Joi.string().required().label("Menu name"),
  description: Joi.string().required().label("Menu description"),
  price: Joi.number().required().label("Menu price"),
  image: Joi.string().allow(null).label("Menu image"),
  // restaurant: Joi.string().required().label("Restaurant ID"),
  // addedBy: Joi.string().required().label("User ID"),
});

module.exports = addMenuSchema; 
