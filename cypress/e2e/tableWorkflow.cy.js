describe('Visualización de tabla de tareas en Workflow > Table', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe mostrar la tabla de tareas con columnas y celdas clave', () => {
    // Ir a Workflow
    cy.contains('Workflow').click();
    // Ir a la pestaña Table
    cy.contains('Table').click();
    // Verificar que los headers de la tabla existen y contienen los textos esperados
    const headers = ['TASK', 'STATUS', 'PRIORITY', 'ASSIGNEES', 'LAST UPDATE'];
    cy.get('th').then($ths => {
      const thTexts = [...$ths].map(th => th.innerText.trim().toUpperCase());
      headers.forEach(header => {
        expect(thTexts).to.include(header);
      });
    });
    // Verificar que hay al menos una fila de tarea
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
    // Verificar que cada fila tiene celdas para nombre, estado, prioridad, asignados y fecha
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td').eq(0).should('not.be.empty'); // Task name
      cy.wrap($row).find('td').eq(1).should('not.be.empty'); // Status
      cy.wrap($row).find('td').eq(2).should('not.be.empty'); // Priority
      cy.wrap($row).find('td').eq(3).should('not.be.empty'); // Assignees
      cy.wrap($row).find('td').eq(4).should('not.be.empty'); // Last Update
    });
  });
}); 