describe("Login fallido por mala contraseña", () => {
    it("Login con contraseña incorrecta", () => {
      cy.visit("/");
  
      cy.fixture("incorrectPassword").then((user) => {
        cy.get("#email").type(user.email);
        cy.get("#password").type(user.password);
        cy.get(".inline-flex").click(); // Botón de login
      });
  
      cy.contains("Authentication error. Please verify your credentials.");
  
    });
  });