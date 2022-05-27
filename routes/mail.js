const express = require("express");
const router = express.Router();
const {
  sendPeerToPeerMail,
  sendWelcomeMail,
} = require("../controllers/sendEmail");

// TODO hacer que el refresh token se pida solo???
// TODO less secure app va a dejar de funcionar pronto!
// TODO darle publish app en la consola de google. Poner un logo
router.post("/send-email", sendPeerToPeerMail);
router.post("/register", sendWelcomeMail);
module.exports = router;
