const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  BACKEND_MAIL,
} = require("../config");
const nodemailer = require("nodemailer");
const { oauth2Client } = require("./OAuth");

/**
 * Will request a new access token from the google API and create and return a new transporter object
 * @returns {Promise<Object>}  - Resolves to a transporter object, rejects with an error
 */

const createNodeMailerTransporter = async () => {
  oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: BACKEND_MAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken,
    },
  });
  return transporter;
};

module.exports = { createNodeMailerTransporter };
