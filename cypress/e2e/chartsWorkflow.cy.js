describe('Visualización de gráficos en Workflow > Charts', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe mostrar los gráficos Burndown Chart, Burn Up Chart y Done Items Heatmap', () => {
    // Ir a Workflow
    cy.contains('Workflow').click();
    // Ir a la pestaña Charts
    cy.contains('Charts').click();
    // Verificar que se muestra el Burndown Chart
    cy.contains('Burndown Chart').should('be.visible');
    cy.contains('Remaining Work').should('be.visible');
    cy.contains('Ideal Burndown').should('be.visible');
    // Verificar que se muestra el Done Items Heatmap
    cy.contains('Done Items Heatmap').should('be.visible');
    // Verificar que se muestra el Burn Up Chart
    cy.contains('Burn Up Chart').should('be.visible');
    cy.contains('Planned Points').should('be.visible');
    cy.contains('Completed Points').should('be.visible');
  });
}); 