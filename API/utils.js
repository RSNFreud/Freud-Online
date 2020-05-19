// Imports
const Redis = require("ioredis");
const redis = new Redis();
const nodemailer = require("nodemailer");

// Env
const dotenv = require("dotenv");
dotenv.config();

// Check if redis is running
redis.on("error", function (error) {
  console.error(error);
});

// Check if user sent a request in the past hour
exports.timeout = async (ip) => {
  if ((await redis.exists(ip)) === 1) return true;
};

exports.setTimeout = (ip) => {
  redis.set(ip, 0, "EX", 3600);
};
// Create email service
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply@freud-online.co.uk",
    pass: process.env.PASSWORD,
  },
});

// Send email
exports.sendEmail = (html, data) => {
  const mailOptions = {
    from: "Freud-Online <noreply@freud-online.co.uk>", // sender address
    to: data["email"], // list of receivers
    bcc: process.env.EMAIL,
    subject: "Confirmation of your submission", // Subject line
    html: html, // plain text body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) return false;
  });
};

// Get date for deadline checker
exports.minDate = () => {
  let date = new Date();
  date.setTime(date.getTime() + 86400000);
  let day =
    date.getDate() > 10 ? date.getDate() - 1 : "0" + (date.getDate() - 1);
  let month =
    date.getMonth() > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  return `${date.getFullYear()}-${month}-${day}`;
};

// Get date for email header
exports.getDate = () => {
  let date = new Date();
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  return `${day}/${month}/${date.getFullYear()}`;
};
