/**
 * Will return a string with the HTML code for the email body
 *
 * @param {string} recipientName - The name of the recipient.
 * @param {string} emitterName - The name of the emitter
 * @param {string} message - The message to be sent to the recipient
 * @returns {string} - The HTML code for the email body
 */

const createBodyHTML = (recipientName, emitterName, message) => {
  const htmlContent = `
<p>Hi ${recipientName}, ${emitterName} has sent you this message:</p>
<p>${message}</p>
`;
  return htmlContent;
};

module.exports = createBodyHTML;
