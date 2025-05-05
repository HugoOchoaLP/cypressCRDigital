describe('Crear un nuevo usuario desde la gestión global', () => {
    it('Debería crear un nuevo usuario', () => {
      cy.visit('/');
  
      // Login con fixture
      cy.fixture("user").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      // Navegar a Settings
      cy.contains('span', 'Settings').click();
  
      // Ir a la pestaña User Management
      cy.contains('button', 'User Management').click();
  
      // Clic en botón Add User
      cy.contains('button', 'Add User').click();
  
      // Llenar formulario usando IDs del formulario original
      cy.get('#firstName').type('Juan');
      cy.get('#lastName').type('Pérez');
      cy.get('#email').type('juan.perez@example.com');
      cy.get('#password').type('Password123!');
      cy.get('#platformRole').select('User');
  
      // Guardar usuario
      cy.get('button[type="submit"]').click();
  
      // Verificación: revisar si el usuario aparece en la tabla
      cy.get('table').within(() => {
        cy.contains('td', 'Juan Pérez').should('exist');
        cy.contains('td', 'juan.perez@example.com').should('exist');
        cy.contains('td', 'User').should('exist');
      });
    });
  });
  