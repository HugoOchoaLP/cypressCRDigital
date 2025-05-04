describe("Login mal por usuario inexistente", () => {
    it("Login y mensaje de error", () => {
      cy.visit("/");
  
      cy.fixture("fakeUser").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      cy.contains("Authentication error. Please verify your credentials.");
  
    });
  });