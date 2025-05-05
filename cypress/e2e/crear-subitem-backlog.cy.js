describe('Crear sub-items en el backlog', () => {
  it('Debería crear un sub-item asociado a un item padre', () => {
    // Visitar la página principal
    cy.visit('/');

    // Login con fixture
    cy.fixture("user").then((user) => {
      cy.get("#email").type(user.email);
      cy.get("#password").type(user.password);
      cy.get(".inline-flex").click();
    });

    // Navegar al backlog
    cy.contains('span', 'Projects').click();
    cy.contains('Forest').click();
    cy.contains('Backlog').click();

    // Abrir formulario de nuevo item
    cy.contains('Add Item').click();

    // Verificar que el modal está visible
    cy.contains('Create New Item').should('be.visible');

    // Llenar el formulario (solo el nombre ya que Story es el tipo predeterminado)
    cy.get('input[placeholder="Enter name"]').type('Nueva historia de usuario');
    
    // Crear el item
    cy.contains('button', 'Create Item').click();

    // Verificar que se creó correctamente
    cy.contains('Nueva historia de usuario').should('be.visible');
  });
});

describe('Crear sub-items anidados en el backlog', () => {
  it('Debería crear un sub-item bajo un Epic existente sin errores', () => {
    // Login y navegación al backlog
    cy.visit('/');
    cy.fixture("user").then((user) => {
      cy.get("#email").type(user.email);
      cy.get("#password").type(user.password);
      cy.get(".inline-flex").click();
    });
    cy.contains('span', 'Projects').click();
    cy.contains('Forest').click();
    cy.contains('Backlog').click();

    // Crear sub-item bajo "Virtual Tree Growth Mechanism"
    cy.contains('Add Item').click();
    cy.get('input[placeholder="Enter name"]').type('Sub-item bajo Virtual Tree');
    cy.get('label').contains('Epic').parent().find('select').select('Virtual Tree Growth Mechanism');
    cy.contains('button', 'Create Item').click();

    // Si no hay error, la prueba pasa
    // (Opcional) Esperar a que desaparezca el modal o limpiar el input
    cy.get('input[placeholder="Enter name"]').should('not.exist');
  });
});
