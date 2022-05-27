const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mailRouter = require("./app/routes/mail");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", mailRouter);
app.use(express.static(path.join(__dirname, "public")));

// TODO probar que pasa si sacas less secure apps!!!
// TODO eliminar el front?
// TODO HACer tests?
// TODO Fijate que los templates que estas usando de los mails sean una cosa handwriten o algo de nodemailer
// TODO darle publish app en la consola de google. Poner un logo
// TODO testear los errores, por ejemplo el de cuando expira el token
// TODO borrar todos los TODO

app.listen(process.env.PORT || 3030, () => {
  console.log("Server started on port 3030"); // TODO poner el port bien aca
});
