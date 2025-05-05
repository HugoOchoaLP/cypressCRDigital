describe("Ver detalle de historia de usuario", () => {
    it("ver detalle de historia de usuario", () => {
      cy.visit("/");
  
      cy.fixture("user").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      // Seleccionar el proyecto recién creado
      cy.contains("Mi proyecto de prueba").click();
  
      // Seleccionar el proyecto recién creado
      cy.contains("Backlog").click();
      cy.contains("Historia de usuario de prueba").click();
    });
  });