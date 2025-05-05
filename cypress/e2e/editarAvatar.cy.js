describe('Editar avatar desde la página de perfil personal del usuario', () => {
    it('Debería permitir al usuario cambiar su avatar', () => {
      cy.visit('/');
  
      // Login con fixture
      cy.get("#email").type("cypress@email.com");
      cy.get("#password").type('1234');
      cy.get(".inline-flex").click(); // Botón de login
  
      // Navegar a Settings
      cy.contains('span', 'Settings').click();
  

      // Hacer clic en el icono de editar avatar (suponiendo que es un botón con la clase _avatar-edit_)
      cy.get('button svg.lucide-pencil').click({ force: true });
  
      // Hacer click al boton para editar el avatar
      cy.contains('button', 'Choose Avatar').click();

    // Esperar que se muestren los avatares disponibles (asegurándonos de que el contenedor sea visible)
      cy.get('.grid.grid-cols-4.gap-4.max-h-64.overflow-y-auto.place-items-center')
      .should('be.visible'); // Asegurarse de que la galería de avatares es visible

    // Seleccionar el primer avatar de la galería
      cy.get('.grid.grid-cols-4.gap-4.max-h-64.overflow-y-auto.place-items-center img')
      .first() // Seleccionar el primer avatar
      .click(); // Hacer clic en el avatar
  
      // Guardar los cambios (asumimos que hay un botón "Guardar")
      cy.get('button').contains('Save').click();

    });
});
