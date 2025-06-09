describe('Visualización personalizada en For You', () => {
  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe mostrar la información personalizada del usuario', () => {
    // Ir a For You
    cy.contains('For You').click();
    // Verificar nombre y puntos
    cy.contains('Enrique Macias').should('be.visible');
    cy.contains('pts').should('be.visible');
    // Verificar avatar (debe haber al menos una imagen o inicial)
    cy.get('img, .avatar').should('exist');
    // Verificar sección de tareas asignadas
    cy.contains('Assigned Items').should('be.visible');
    // Verificar sección de tareas completadas
    cy.contains('Completed Items').should('be.visible');
    // Verificar sección de contribuciones
    cy.contains('Your contributions').should('be.visible');
    cy.get('.statLabel').contains(/assigned/i).should('exist');
    cy.get('.statLabel').contains(/completed/i).should('exist');
    cy.get('.statLabel').contains(/completion/i).should('exist');
    cy.contains('Leaderboard').should('be.visible');
    // Verificar que las tareas completadas muestran nombre y estado
    cy.get('div.border.rounded-lg.p-4.flex.flex-col.gap-2').first().within(() => {
      cy.get('h2, h3, h4').should('exist'); // Nombre de la tarea
      cy.get('span[class*="status"]').should('exist'); // Badge de estado
      cy.get('span[class*="status"]').invoke('text').then(text => {
        expect(text.toLowerCase()).to.match(/done|to do|in progress|new/);
      });
    });
  });
}); 