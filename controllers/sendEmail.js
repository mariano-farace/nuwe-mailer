const createHTML = require("../controllers/createHTML");
const {
  createNodeMailerTransporter,
} = require("../controllers/nodeMailerTransporter");

// TODO hacer que el refresh token se pida solo???
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

  console.log("recipientEmail:", recipientEmail);

  const htmlContent = createHTML(recipientName, emitterName, message);
  // TODO corregir el "from" que se envia vacio

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

  // ------------------
  // ------------------
  // SEND MAIL
  // ------------------
  // ------------------

  try {
    // El transporter lo tengo que crear cada vez que se manda un mail, para asegurarme de que el acces token no haya expirado
    // TODO deberia cambiar esto para que si el acces token esta expirado, solicite uno nuevo
    // TODO revisar esto que no esta siendo usado

    const transporter = await createNodeMailerTransporter();

    const result = await transporter.sendMail(mailOptions); // darle ponele callback otry catch!
    // transport.sendMail(mailOptions,function(err,result){
    //   if(err){
    //   res.send({
    //   message:err
    //   })
    //   }else{
    //   transport.close();
    //   res.send({
    //   message:'Email has been sent: check your inbox!'
    //   })
    //   }

    console.log(result);
    res.status(200).send("sent");
  } catch (err) {
    console.log("entra al error directamente");
    console.log(err);
  }
};

module.exports = { sendPeerToPeerMail };
