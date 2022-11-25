const createHtml = (title: string, body1: string, body2: string | null) => {
  const html = `
    <h1>${title}</h1>
    <br/>
    <p>${body1}</p>
    <p>${body2 ? body2 : null}</p>
    <h2>${title}</h2>
    `;

  return html;
};

export default createHtml;
