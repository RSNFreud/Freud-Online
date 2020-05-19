const express = require("express");
const cors = require("cors");
const app = express();
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const fs = require("fs");
const https = require("https");

const dotenv = require("dotenv");
dotenv.config();

const fn = require("./utils"); // Import utilities
const { quoteSchema, contactSchema } = require("./schema"); //Import the schemas

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

app.post("/quoteEmail", async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const { error } = quoteSchema.validate(req.body);

  if (error) return res.status(403).send("Insufficient data.");
  if (await fn.timeout(ip))
    return res
      .status(403)
      .send(
        "You have already submitted a form within the past hour. Please wait before trying again"
      );

  let parsedData = Handlebars.compile(
    fs.readFileSync("./views/quoteEmail.handlebars", { encoding: "utf-8" })
  );

  const data = {
    currentDate: fn.getDate(),
    name: req.body["fullName"],
    company: req.body["company"],
    email: req.body["email"],
    phone: req.body["phone"],
    companyDescription: req.body["companyDescription"],
    websiteURL: req.body["websiteURL"],
    deadline: req.body["deadline"],
    branding: req.body["branding"],
    styling: req.body["styling"],
    additionalInfo: req.body["additionalInfo"],
  };
  let htmlEmail = parsedData(data);
  if (fn.sendEmail(htmlEmail, data) === false)
    return res
      .status(400)
      .send(
        "There was an error while trying to email you. Please make sure your email address is entered correctly"
      );
  res.send("Form submitted succesfully!");

  fn.setTimeout(ip);
});

app.post("/contactEmail", async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const { error } = contactSchema.validate(req.body);

  if (error) return res.status(403).send("Insufficient data.");
  if (await fn.timeout(ip))
    return res
      .status(403)
      .send(
        "You have already submitted a form within the past hour. Please wait before trying again"
      );

  let parsedData = Handlebars.compile(
    fs.readFileSync("./views/contactEmail.handlebars", { encoding: "utf-8" })
  );

  const data = {
    currentDate: fn.getDate(),
    name: req.body["fullName"],
    company: req.body["company"],
    email: req.body["email"],
    phone: req.body["phone"],
    comments: req.body["comments"],
  };
  let htmlEmail = parsedData(data);
  if (fn.sendEmail(htmlEmail, data) === false)
    return res
      .status(400)
      .send(
        "There was an error while trying to email you. Please make sure your email address is entered correctly"
      );

  fn.setTimeout(ip);
  res.send("Form submitted succesfully!");
});

const port = 3200;
app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
