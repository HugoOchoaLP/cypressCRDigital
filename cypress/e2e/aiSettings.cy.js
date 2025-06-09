describe('Configuración de AI en Project Settings', () => {
  const aiContext = `Nuevo contexto AI ${Date.now()}`;
  const techStack = `Nuevo tech stack ${Date.now()}`;

  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe editar la configuración de AI y mostrar un toast de éxito', () => {
    // Ir a Settings
    cy.contains('Settings').click();
    // Ir a la pestaña AI Settings
    cy.contains('AI Settings').click();
    // Presionar botón Edit
    cy.contains('button', 'Edit').click();
    // Toggle IA
    cy.get('button#ai-enabled').click();
    // Limpiar y escribir en AI Context
    cy.get('textarea').first().clear().type(aiContext);
    // Limpiar y escribir en Tech Stack
    cy.get('textarea').last().clear().type(techStack);
    // Guardar cambios
    cy.contains('button', 'Save').click();
    // Verificar el toast de éxito
    cy.contains('AI settings updated successfully!', { timeout: 1000 }).should('be.visible');
  });
}); 