const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const router = express.Router();
const {
  CLIENT_ID, //No issue
  CLIENT_SECRET, //No issue
  REDIRECT_URI,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");

//TODO hacer que el refresh token se pida solo???
//TODO less secure app va a dejar de funcionar pronto!
//TODO darle publish app en la consola de google. Poner un logo

router.post("/send-email", (req, res) => {
  const { name, email, message, phone } = req.body;
  const htmlContent = `
  <h1>Formulario de nodemailer</h1>
  <ul>
    <li>Nombre: ${name}</li>
    <li>Email: ${email}</li>
    <li>Teléfono: ${phone}</li>
  </ul>
  <p>${message}</p>
`;

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  async function sendMail() {
    try {
      const accessToken = await oauth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "carlitosgardel222@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: oauth2Client.credentials.access_token,
        },
      });

      const mailOptions = {
        from: "Prueba de nodemailer",
        to: "mariano_farace@hotmail.com",
        subject: "Prueba de nodemailer",
        html: htmlContent,
      };

      const result = await transporter.sendMail(mailOptions); // darle .then!
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  sendMail()
    .then((result) => {
      console.log(result);
      res.status(200).send("sent");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
