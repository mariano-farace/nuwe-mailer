const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mainRoute = require("./routes/routes");

// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", mainRoute);
app.use(express.static(path.join(__dirname, "public")));

//TODO poner esto con dotenv
//TODO poner App logo en google dashboardh oauth2
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
