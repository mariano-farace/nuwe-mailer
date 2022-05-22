const express = require("express");
const nodemailer = require("nodemailer");
const { oauth2Client } = require("../controllers/OAuth");
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  USER_MAIL,
} = require("../config");
const createHTML = require("../controllers/createHTML");

//TODO hacer que el refresh token se pida solo???
//TODO less secure app va a dejar de funcionar pronto!
//TODO darle publish app en la consola de google. Poner un logo

const mainFunction = async (req, res) => {
  const { name, email, message, phone } = req.body;
  //TODO controlar que hacer con la form esta si esta vacia

  const htmlContent = createHTML(name, email, message, phone);
  //TODO corregir el "from" que se envia vacio

  const mailOptions = {
    //TODO esto hardcoded tengo que cambiarlo por opciones!!
    from: "Prueba de nodemailer",
    to: email,
    subject: "Prueba de nodemailer",
    html: htmlContent,
  };

  //------------------
  //------------------
  //SEND MAIL
  //------------------
  //------------------

  try {
    // El transporter lo tengo que crear cada vez que se manda un mail, para asegurarme de que el acces token no haya expirado
    //TODO deberia cambiar esto para que si el acces token esta expirado, solicite uno nuevo
    //TODO revisar esto que no esta siendo usado
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        //TODO esto hardcoded tengo que cambiarlo por en ENV
        user: USER_MAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

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
    console.log(err);
  }
};

module.exports = { mainFunction };
