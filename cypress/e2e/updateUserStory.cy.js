describe("Actualizar detalle de historia de usuario", () => {
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
    // Seleccionar la historia de usuario
    cy.get(
      ":nth-child(5) > ._actionButtons_1wr22_13 > ._actionMenuContainer_tny39_3 > ._menuButton_tny39_13"
    ).click();
    cy.contains("Edit").click();
    cy.get("#name").clear().type("Historia de usuario de prueba actualizada");
    cy.get('._submitButton_5nor4_277').click();
    cy.contains("Historia de usuario de prueba actualizada").click();
  });
});
