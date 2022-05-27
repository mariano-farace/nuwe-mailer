const Joi = require("joi");

const simpleMailSchema = Joi.object({
  emitterName: Joi.string().min(3).max(50).required(),

  emitterEmail: Joi.string().email(),

  recipientName: Joi.string().min(3).max(50).required(),

  recipientEmail: Joi.string().email(),

  subject: Joi.string().required(),

  message: Joi.string().required(),
});

const welComeSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email(),
});

module.exports = { simpleMailSchema, welComeSchema };
