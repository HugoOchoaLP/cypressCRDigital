describe('Visualización de tareas en Workflow > Board', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe mostrar las columnas de estado y las tareas correspondientes', () => {
    // Ir a Workflow
    cy.contains('Workflow').click();
    // Ir a la pestaña Board
    cy.contains('Board').click();
    // Verificar que existen las columnas de estado principales
    const columns = ['No Status', 'To Do', 'In Progress', 'Done'];
    columns.forEach(col => {
      cy.get('h3.board-column__title').contains(col).should('exist');
    });
    // Verificar que cada columna tiene al menos una tarjeta o muestra el mensaje de vacío
    columns.forEach(col => {
      cy.contains(col).parent().within(() => {
        cy.get('.task-card').should('exist');
      });
    });
    // Verificar que la información principal de la tarjeta se muestra
    cy.get('.task-card').first().within(() => {
      cy.get('h2, h3, h4').should('exist'); // Nombre de la tarea
      cy.contains(/high|medium|low/i).should('exist'); // Prioridad
    });
  });
}); 