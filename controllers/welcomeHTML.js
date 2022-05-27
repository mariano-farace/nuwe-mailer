const welcomeHTML = (name) => {
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
module.exports = { welcomeHTML };
