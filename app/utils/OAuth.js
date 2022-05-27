const { google } = require("googleapis");
const {
  CLIENT_ID, // No issue
  CLIENT_SECRET, // No issue
  REDIRECT_URI,
} = require("../config");

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

module.exports = { oauth2Client };
