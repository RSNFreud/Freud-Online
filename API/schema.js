//Imports
const Joi = require("@hapi/joi");
const fn = require("./utils"); // Import utilities

//Quote form schema
exports.quoteSchema = Joi.object({
  fullName: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  phone: Joi.string()
    .required()
    .regex(/^0[2-9]\d{7,9}$/),
  branding: Joi.string().required(),
  company: Joi.string().min(2).allow(""),
  companyDescription: Joi.string().min(20).required(),
  styling: Joi.string().min(10).allow(""),
  additionalInfo: Joi.string().min(10).allow(""),
  websiteURL: Joi.string()
    .regex(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    )
    .allow(""),
  deadline: Joi.date().greater(fn.minDate()).required(),
});

//Contact form schema
exports.contactSchema = Joi.object({
  fullName: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  phone: Joi.string()
    .required()
    .regex(/^0[2-9]\d{7,9}$/),
  company: Joi.string().min(2).allow(""),
  comments: Joi.string().min(30).required(),
});
