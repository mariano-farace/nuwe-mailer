const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");
const nodemailer = require("nodemailer");
const { oauth2Client } = require("../controllers/OAuth");
// TODO considerar si mandar directamente el transporter yque sea el mismo para las dos rutas que mandan mails, puede dar problemas con la caducacion de refresh y acces token
const createNodeMailerTransporter = async () => {
  console.log("refresh token:", REFRESH_TOKEN);
  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      // TODO esto hardcoded tengo que cambiarlo por en ENV
      user: USER_MAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken,
    },
  });
  return transporter;
};

module.exports = { createNodeMailerTransporter };
