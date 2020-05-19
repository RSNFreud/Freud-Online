import Joi from "joi-browser";
import { checkDate } from "./utils";

export const quoteSchema = {
  fullName: Joi.string()
    .required()
    .min(3)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your full name!";
            break;
          case "string.min":
            err.message = `Please enter a valid name!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  email: Joi.string()
    .required()
    .email()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your email address!";
            break;
          case "string.email":
            err.message = `Please enter a valid email address!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  phone: Joi.string()
    .required()
    .regex(/^0[2-9]\d{7,9}$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your phone number!";
            break;
          case "string.regex.base":
            err.message = `Please enter a valid phone number!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  branding: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "This field is required!";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  company: Joi.string()
    .min(2)
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.min":
            err.message = "Please enter more than 2 characters";
            break;
          case "any.empty":
            err.message = "This field is required!";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  companyDescription: Joi.string()
    .min(20)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.min":
            err.message = "Please enter more than 20 characters";
            break;
          case "any.empty":
            err.message = "This field is required!";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  styling: Joi.string()
    .min(10)
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.min":
            err.message = "Please enter more than 10 characters";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  additionalInfo: Joi.string()
    .min(10)
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.min":
            err.message = "Please enter more than 10 characters";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  websiteURL: Joi.string()
    .regex(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    )
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "string.regex.base":
            err.message = "Please enter a valid url! (e.g: www.google.com)";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  deadline: Joi.date()
    .greater(checkDate())
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.required":
            err.message = "This field is required!";
            break;
          case "date.greater":
          case "date.base":
            err.message = "Please choose a date after " + checkDate();
            break;
          default:
            break;
        }
      });
      return errors;
    }),
};

export const contactSchema = {
  fullName: Joi.string()
    .required()
    .min(3)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your full name!";
            break;
          case "string.min":
            err.message = `Please enter a valid name!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  email: Joi.string()
    .required()
    .email()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your email address!";
            break;
          case "string.email":
            err.message = `Please enter a valid email address!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  phone: Joi.string()
    .required()
    .regex(/^0[2-9]\d{7,9}$/)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your phone number!";
            break;
          case "string.regex.base":
            err.message = `Please enter a valid phone number!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),

  company: Joi.string()
    .min(2)
    .allow("")
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please enter your company name!";
            break;
          case "string.min":
            err.message = "Please enter more than 2 characters";
            break;
          default:
            break;
        }
      });
      return errors;
    }),

  comments: Joi.string()
    .min(30)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case "any.empty":
            err.message = "Please include your comment/question!";
            break;
          case "string.min":
            err.message = "Please enter more than 30 characters";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
};
