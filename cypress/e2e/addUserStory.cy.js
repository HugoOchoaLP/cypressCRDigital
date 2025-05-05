describe("Agregar historia de usuario", () => {
  it("agregar historia de usuario y verificar que se creo", () => {
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

    cy.get('.inline-flex').click();

    cy.get('#name').type("Historia de usuario de prueba");
    cy.get('._submitButton_5nor4_277').click();
    cy.contains("Historia de usuario de prueba").click();
  });
});
