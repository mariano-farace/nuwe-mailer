const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");
const nodemailer = require("nodemailer");
const { oauth2Client } = require("../controllers/OAuth");

const createNodeMailerTransporter = async () => {
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
