const createHTML = require("../controllers/createHTML");
const {
  createNodeMailerTransporter,
} = require("../controllers/nodeMailerTransporter");
const { welcomeHTML } = require("../controllers/welcomeHTML");
const path = require("path");

// TODO less secure app va a dejar de funcionar pronto!
// TODO darle publish app en la consola de google. Poner un logo

const sendPeerToPeerMail = async (req, res) => {
  const {
    emitterName,
    emitterEmail,
    recipientName,
    recipientEmail,
    subject,
    message,
  } = req.body;
  // TODO controlar que hacer con la form esta si esta vacia
  // TODO remove all console.log
  console.log("recipientEmail:", recipientEmail);

  const htmlContent = createHTML(recipientName, emitterName, message);

  const mailOptions = {
    // TODO esto hardcoded tengo que cambiarlo por opciones!!
    // As per documentation: Gmail also always sets authenticated username as the From: email address. So if you authenticate as foo@example.com and set bar@example.com as the from: address, then Gmail reverts this and replaces the sender with the authenticated user.
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

const sendWelcomeMail = async (req, res) => {
  const { email, name } = req.body;
  // TODO controlar que hacer con la form esta si esta vacia
  // TODO aca crear el HTML con las cosas del body
  const imagePath = path.join(__dirname, "/../public/email-banner.png");
  const signaturePath = path.join(__dirname, "/../public/signature.png");

  console.log("image_path:", imagePath);
  const mailOptions = {
    // TODO esto hardcoded tengo que cambiarlo por opciones!!
    // TODO testear los errores, por ejemplo el de cuando expira el token
    // As per documentation: Gmail also always sets authenticated username as the From: email address. So if you authenticate as foo@example.com and set bar@example.com as the from: address, then Gmail reverts this and replaces the sender with the authenticated user.
    from: {
      name: "Nuwe E-mail App",
    },
    to: email,
    subject: "Welcome to MyApp!",
    html: welcomeHTML(name),
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
