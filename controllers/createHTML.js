const createHTML = (name, email, message, phone) => {
  const htmlContent = `
<h1>Formulario de nodemailer</h1>
<ul>
  <li>Nombre: ${name}</li>
  <li>Email: ${email}</li>
  <li>Teléfono: ${phone}</li>
</ul>
<p>${message}</p>
`;
  return htmlContent;
};

module.exports = createHTML;
