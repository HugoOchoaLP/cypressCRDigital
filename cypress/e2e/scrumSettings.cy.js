describe('Configuración de Scrum Settings en Project Settings', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe editar la configuración de Scrum y mostrar un toast de éxito', () => {
    // Ir a Settings
    cy.contains('Settings').click();
    // Ir a la pestaña Scrum Settings
    cy.contains('Scrum Settings').click();
    // Presionar botón Edit
    cy.contains('button', 'Edit').click();
    // Cambiar duración del sprint (dropdown)
    cy.contains('Sprint Duration').parent().find('button[role="combobox"]').click();
    cy.contains('3 Weeks').click();
    // Seleccionar días laborales (por ejemplo, seleccionar Mon, Tue, Wed)
    cy.contains('Mon').click();
    cy.contains('Tue').click();
    cy.contains('Wed').click();
    // Cambiar Story Points Scale (dropdown)
    cy.contains('Story Points Scale').parent().find('button[role="combobox"]').click();
    cy.contains('Linear (1, 2, 3, 4, 5, 6, 7, 8)').click();
    // Guardar cambios
    cy.contains('button', 'Save').click();
    // Verificar el toast de éxito
    cy.contains('Scrum settings updated successfully!', { timeout: 1000 }).should('be.visible');
  });
}); 