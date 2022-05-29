/**
 * Will return a string with the HTML code for the welcome email body.
 * @param {string} name - The name of the user that has registered
 * @returns {string} - The HTML code for the welcome email body
 */

const createWelcomeHTML = (name) => {
  return `

  <body>
  <img
      src="cid:header"
      alt="Img"
       />
    <h1>Welcome to my app ${name}!</h1>
    <p>Now you can send emails using the service</p>
  <img
      src="cid:signature"
      alt="Signature"
      />
  </body>

`;
};
module.exports = { welcomeHTML: createWelcomeHTML };
