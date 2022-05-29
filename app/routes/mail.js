const express = require("express");
const router = express.Router();
const {
  sendPeerToPeerMail,
  sendWelcomeMail,
} = require("../controllers/sendEmail");

/**
 * Email data
 * @typedef {object} emailData
 * @property {string} emitterName.required - The name of the user who sent the email
 * @property {string} emitterEmail.required - The email of the user who sent the email
 * @property {string} recipientName.required - The name of the user who received the email
 * @property {string} recipientEmail.required - The email of the user who received the email
 * @property {string} subject.required - The subject of the email
 * @property {string} message.required - The message of the email
 *
 */

/**
 * POST /email-simple
 * @summary Send an email to specified email address
 * @tags mail
 * @param {emailData} request.body.required - The email data
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @return {object} 500 - Internal server error response
 * @example request - Payload example
 * {
    "emitterName": "John Doe",
    "emitterEmail":"johnDoe@mail.com",
    "recipientName": "Jane Doe",
    "recipientEmail": "janeDoe@mail.com",
    "subject": "This is the email subject",
    "message": "Message body"
   }
 *
 * @example response - 200 - Example success response
 * { 
 *   "status":"sent", 
 *   "info": {
        "accepted": [
            "janeDoe@mail.com"
        ],
        "rejected": [],
        "envelopeTime": 306,
        "messageTime": 584,
        "messageSize": 975,
        "response": "250 2.0.0 OK  1653647757 x5-20020a05600c21c500b0039787538c9csm1889589wmj.20 - gsmtp",
        "envelope": {
            "from": "serviceAccount@gmail.com",
            "to": [
                "janeDoe@mail.com"
            ]
        },
        "messageId": "<91952e43-cc65-36e1-3d03-f82980d0ed99@gmail.com>"
    }}
 * @example response - 400 - Example error response
 * {
    "status:": "Validation error",
    "message": "\"emitterName\" is required"
   }
 */
router.post("/email-simple", sendPeerToPeerMail);
router.post("/register", sendWelcomeMail);
module.exports = router;
