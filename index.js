const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mailRouter = require("./routes/mail");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", mailRouter);
app.use(express.static(path.join(__dirname, "public")));
// TODO cahnge port!!!
// TODO poner esto con dotenv
// TODO poner App logo en google dashboardh oauth2
// TODO probar que pasa si sacas less secure apps!!!
// TODO eliminar el front?
// TODO HACer tests?
// TODO crear template de env
app.listen(process.env.PORT || 3030, () => {
  console.log("Server started on port 3030"); // TODO poner el port bien aca
});
