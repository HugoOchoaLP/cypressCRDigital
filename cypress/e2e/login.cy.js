describe("Login directamente en la pantalla", () => {
    it("Login y directo a las pagina de proyectos", () => {
      cy.visit("/");
  
      cy.fixture("user").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      // Hacer clic en "New Project"
      //cy.get('button:contains("New Project")').click();
  
      // Llenar los campos del nuevo proyecto
      //cy.get('#projectName').type('Mi proyecto de prueba');
      //cy.get('#description').type('Este es un proyecto creado desde Cypress');
  
      // Enviar el formulario
      //cy.get('button:contains("Create")').click();
  
      // Verificar que el proyecto fue creado
      //cy.contains('Mi proyecto de prueba').should('exist');
  
      // Seleccionar el proyecto recién creado
      cy.contains("Mi proyecto de prueba");
  
    });
  });