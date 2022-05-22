const createHTML = (recipientName, emitterName, message) => {
  const htmlContent = `
<h1>Hi ${recipientName}, ${emitterName} has sent you this message:</h1>
<p>${message}</p>
`;
  return htmlContent;
};

module.exports = createHTML;
