describe('Chatbot Sensai', () => {
  const mensaje = `Mensaje de prueba ${Date.now()}`;

  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe enviar un mensaje y mostrarlo en el chat', () => {
    // Abrir el chat con el botón flotante
    cy.get('button._floatingButton_1vmwx_19').should('be.visible').click();

    // Esperar a que el chat esté visible
    cy.get('textarea._chatInput_1vmwx_99').should('be.visible');

    // Escribir el mensaje
    cy.get('textarea._chatInput_1vmwx_99').type(mensaje);

    // Enviar el mensaje
    cy.get('button._sendButton_1vmwx_128').click();

    // Verificar que el mensaje aparece en la ventana de chat
    cy.get('div._chatMessages_1vmwx_66').should('contain', mensaje);
  });
}); 