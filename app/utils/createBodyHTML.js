/**
 *
 *
 * @param {*} recipientName
 * @param {*} emitterName
 * @param {*} message
 * @returns
 */

const createBodyHTML = (recipientName, emitterName, message) => {
  const htmlContent = `
<p>Hi ${recipientName}, ${emitterName} has sent you this message:</p>
<p>${message}</p>
`;
  return htmlContent;
};

module.exports = createBodyHTML;
