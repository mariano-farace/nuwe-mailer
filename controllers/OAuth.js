const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
const {
  CLIENT_ID, //No issue
  CLIENT_SECRET, //No issue
  REDIRECT_URI,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");

const OAuth2 = google.auth.OAuth2;
const oauth2Client = OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

module.exports = { oauth2Client };
