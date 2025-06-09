describe('Configuración de Customization en Project Settings', () => {
  const nuevaEtapa = `Nueva etapa ${Date.now()}`;
  const nuevoTag = `Nuevo tag ${Date.now()}`;

  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe agregar una etapa y un tag, y mostrar un toast de éxito', () => {
    // Ir a Settings
    cy.contains('Settings').click();
    // Ir a la pestaña Customization
    cy.contains('Customization').click();
    // Presionar botón Edit
    cy.contains('button', 'Edit').click();
    // Agregar nueva etapa
    cy.get('input[placeholder="Add new stage..."]').type(nuevaEtapa);
    cy.contains('button', 'Add').first().click();
    // Agregar nuevo tag
    cy.get('input[placeholder="Add new tag..."]').type(nuevoTag);
    cy.contains('button', 'Add').last().click();
    // Guardar cambios
    cy.contains('button', 'Save').click();
    // Verificar el toast de éxito
    cy.contains('Customization settings updated successfully!', { timeout: 1000 }).should('be.visible');
  });
}); 