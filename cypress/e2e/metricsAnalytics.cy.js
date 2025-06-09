describe('Configuración de Metrics & Analytics en Project Settings', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe editar los toggles de métricas y mostrar un toast de éxito', () => {
    // Ir a Settings
    cy.contains('Settings').click();
    // Ir a la pestaña Metrics & Analytics
    cy.contains('Metrics & Analytics').click();
    // Presionar botón Edit
    cy.contains('button', 'Edit').click();
    // Cambiar el estado de los toggles (puedes ajustar el número de toggles si cambia la UI)
    cy.contains('Burndown Chart').parent().find('button').click();
    cy.contains('Burn Up Chart').parent().find('button').click();
    cy.contains('Workload Heatmaps').parent().find('button').click();
    // Guardar cambios
    cy.contains('button', 'Save').click();
    // Verificar el toast de éxito
    cy.contains('Metrics settings updated successfully!', { timeout: 1000 }).should('be.visible');
  });
}); 