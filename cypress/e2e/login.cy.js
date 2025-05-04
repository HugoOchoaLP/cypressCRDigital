describe("Login directamente en la pantalla", () => {
    it("Login y directo a las pagina de proyectos", () => {
      cy.visit("/");
  
      cy.fixture("user").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });

      cy.contains("Mi proyecto de prueba");
  
    });
  });