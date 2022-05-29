const { google } = require("googleapis");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../config");

/**
 * oauth2Client object
 */

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

module.exports = { oauth2Client };
