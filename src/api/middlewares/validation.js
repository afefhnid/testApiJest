const { celebrate, Joi } = require('celebrate');

const id = Joi.number()
  .integer()
  .positive();

module.exports = { celebrate, Joi, id };
