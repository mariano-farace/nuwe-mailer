const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const router = express.Router();
const {
  CLIENT_ID, // No issue
  CLIENT_SECRET, // No issue
  REDIRECT_URI,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");
const { sendPeerToPeerMail } = require("../controllers/sendEmail");

// TODO hacer que el refresh token se pida solo???
// TODO less secure app va a dejar de funcionar pronto!
// TODO darle publish app en la consola de google. Poner un logo
router.post("/send-email", sendPeerToPeerMail);
module.exports = router;
