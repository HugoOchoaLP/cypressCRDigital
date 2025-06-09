describe('Visualización de información y gráficos en Workflow > Overview', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe mostrar la información y los gráficos clave del sprint activo', () => {
    // Ir a Workflow
    cy.contains('Workflow').click();
    cy.wait(3000);
    // Ir a la pestaña Overview (tab dentro de Workflow, no el sidebar)
    cy.get('button.tabs-navigation__item').contains(/^Overview$/).click();
    // Verificar información principal del sprint
    cy.contains('Sprint Progress').should('be.visible');
    cy.contains('Completion Rate').should('be.visible');
    cy.contains('Completed Tasks').should('be.visible');
    cy.contains('Sprint Dates').should('be.visible');
    cy.contains('Start Date').should('be.visible');
    cy.contains('End Date').should('be.visible');
    cy.contains('Time Remaining').should('be.visible');
    cy.contains('Days Left').should('be.visible');
    cy.contains('Status').should('be.visible');
    // Verificar gráficos de tareas
    cy.contains('Tasks by Status').should('be.visible');
    cy.contains('Tasks by Type').should('be.visible');
    // Verificar leyendas de los gráficos
    cy.contains('New').should('be.visible');
    cy.contains('To Do').should('be.visible');
    cy.contains('In Progress').should('be.visible');
    cy.contains('Tasks by Type').should('be.visible');
  });
}); 