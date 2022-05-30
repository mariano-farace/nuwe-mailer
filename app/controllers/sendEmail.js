const createBodyHTML = require("../utils/createBodyHTML");
const {
  createNodeMailerTransporter,
} = require("../utils/nodeMailerTransporter");
const { createWelcomeHTML } = require("../utils/createWelcomeHTML");
const path = require("path");
const { simpleMailSchema, welComeSchema } = require("../utils/joiSchemas");

/**
 * An user will make use of this endpoint to send an email
 */

const sendPeerToPeerMail = async (req, res) => {
  const {
    emitterName,
    emitterEmail,
    recipientName,
    recipientEmail,
    subject,
    message,
  } = req.body;

  try {
    await simpleMailSchema.validateAsync(req.body);
  } catch (err) {
    const errMsg = err.details[0].message;
    return res
      .status(400)
      .json({ "status:": "Validation error", message: errMsg });
  }

  const htmlContent = createBodyHTML(recipientName, emitterName, message);

  const mailOptions = {
    // As per nodemailer documentation: Gmail also always sets authenticated username as the From: email address. So if you authenticate as foo@example.com and set bar@example.com as the from: address, then Gmail reverts this and replaces the sender with the authenticated user.
    from: {
      name: emitterName,
      address: emitterEmail,
    },
    to: recipientEmail,
    subject,
    html: htmlContent,
  };

  try {
    const transporter = await createNodeMailerTransporter();
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ "status:": "sent", info: result });
  } catch (err) {
    res.status(500).json({ "status:": "error", info: err });
  }
};

/**
 * This endpoint will send an welcome email when the user registers
 */
const sendWelcomeMail = async (req, res) => {
  const { email, name } = req.body;

  try {
    await welComeSchema.validateAsync(req.body);
  } catch (err) {
    const errMsg = err.details[0].message;
    return res.status(400).json({ "status:": "error", message: errMsg });
  }

  const imagePath = path.join(__dirname, "/../assets/email-banner.png");
  const signaturePath = path.join(__dirname, "/../assets/signature.png");

  const mailOptions = {
    // As per documentation: Gmail also always sets authenticated username as the From: email address. So if you authenticate as foo@example.com and set bar@example.com as the from: address, then Gmail reverts this and replaces the sender with the authenticated user.
    from: {
      name: "Nuwe E-mail App",
    },
    to: email,
    subject: "Welcome to MyApp!",
    html: createWelcomeHTML(name),
    attachments: [
      {
        filename: "header.png",
        path: imagePath,
        cid: "header",
      },
      {
        filename: "signature.png",
        path: signaturePath,
        cid: "signature",
      },
    ],
  };

  try {
    const transporter = await createNodeMailerTransporter();
    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ "status:": "sent", info: result });
  } catch (err) {
    res.status(500).json({ "status:": "error", info: err });
  }
};

module.exports = { sendPeerToPeerMail, sendWelcomeMail };
