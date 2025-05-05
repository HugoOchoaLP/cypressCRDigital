describe('Verificar información del avatar de un miembro del equipo', () => {
    it('Debería mostrar la información detallada al hacer clic en el avatar', () => {
      // Visitar la página principal
      cy.visit('/');
  
      // Login con fixture
      cy.fixture("user").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      // Navegar a la vista del proyecto
      cy.contains('span', 'Projects').click();
  
      // Seleccionar el proyecto "Forest"
      cy.contains('Forest').click();
  
      // Localizar la sección Project Team
      cy.contains('h2', 'Project Team').should('be.visible');
  
      // Hacer clic en el avatar de Hugo Ochoa
      cy.contains('Hugo Ochoa').click();
  
      // Verificar que se muestra el popup con la información del miembro
      cy.contains('h3', 'Hugo Ochoa').should('be.visible');
  
      // Verificar que la información mostrada coincide con los datos del miembro
      cy.contains('Scrum Master').should('be.visible');
      cy.contains('Email').should('be.visible');
      cy.contains('Hugo@email.com').should('be.visible');
      cy.contains('User ID').should('be.visible');
      cy.contains('25').should('be.visible');
      cy.contains('Role').should('be.visible');
      cy.contains('Status').should('be.visible');
      cy.contains('Active').should('be.visible');
  
      // Cerrar el popup usando el botón de cerrar (×)
      cy.get('button').contains('×').click();
  
      // Verificar que el popup se ha cerrado
      cy.contains('h2', 'Hugo Ochoa').should('not.exist');
    });
  }); 
