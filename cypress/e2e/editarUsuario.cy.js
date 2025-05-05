describe('HO-05 - Editar el nombre de un usuario existente desde la gestión global', () => {
    it('Debería editar el nombre del usuario Juan Pérez a Carlos Ramírez', () => {
      cy.visit('/');
  
      // Login con fixture
      cy.fixture("userTest").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      // Navegar a Settings
      cy.contains('span', 'Settings').click();
  
      // Ir a la pestaña User Management
      cy.contains('button', 'User Management').click();
  
      // Buscar al usuario por email
      cy.get('table').contains('td', 'juan.perez@example.com').parent('tr').within(() => {
        // Clic en botón de menú (tres puntos)
        cy.get('button[aria-label="Open menu"]').click();
      });
  
      cy.get('div._actionMenu_1th3h_1637').should('be.visible');
      cy.get('button._menuItem_1th3h_1707').contains('Edit').click();


      // Editar el nombre y apellido
      cy.get('input[name="firstName"]').clear().type('Carlos');
      cy.get('input[name="lastName"]').clear().type('Ramírez');
  
      // Guardar cambios
      cy.get('button').contains('Save Changes').click();
  
      // Verificación
      cy.get('table').within(() => {
        cy.contains('td', 'Carlos Ramírez').should('exist');
        cy.contains('td', 'juan.perez@example.com').should('exist');
      });
    });
  });
  