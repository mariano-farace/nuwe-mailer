require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; // "http://localhost:3000/oauth2callback";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const USER_MAIL = process.env.USER_MAIL;

module.exports = {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN,
  USER_MAIL,
};
