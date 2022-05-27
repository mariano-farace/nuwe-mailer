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
// TODO fijate como vas a manejar lo del trnasporter y oauth client, si va a ser una funcion, o exportado, y si eso genera problemas con expired token. // TODO considerar si mandar directamente el transporter yque sea el mismo para las dos rutas que mandan mails, puede dar problemas con la caducacion de refresh y acces token
// TODO hacer que el refresh token se pida solo???

app.listen(process.env.PORT || 3030, () => {
  console.log("Server started on port 3030"); // TODO poner el port bien aca
});
