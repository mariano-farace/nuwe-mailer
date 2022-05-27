const express = require("express");
const router = express.Router();
const {
  sendPeerToPeerMail,
  sendWelcomeMail,
} = require("../controllers/sendEmail");

router.post("/email-simple", sendPeerToPeerMail);
router.post("/register", sendWelcomeMail);
module.exports = router;
