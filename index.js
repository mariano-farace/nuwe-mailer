const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mailRouter = require("./app/routes/mail");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", mailRouter);
app.use(express.static(path.join(__dirname, "app/public")));

app.listen(process.env.PORT || 3030, () => {
  console.log("Server started on port 3030");
});
