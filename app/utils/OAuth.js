const { google } = require("googleapis");
const {
  CLIENT_ID, // No issue
  CLIENT_SECRET, // No issue
  REDIRECT_URI,
  REFRESH_TOKEN,
} = require("../config");

// TODO confirmar que esto no vaya a generar error cuando expire el regresh token despues de un dia! sino lo vas a tener que transformar en una funcion y que se pueda llamar cada vez que mandas un mail para crear oauth2Client

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

module.exports = { oauth2Client };
