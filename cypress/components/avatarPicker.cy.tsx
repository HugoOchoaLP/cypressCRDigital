import React from "react";
import { AvatarPicker } from "../../src/components/Account/AvatarPicker";

describe("AvatarPicker", () => {
  it("renders and filters avatars, then selects one", () => {
    const onSelect = cy.stub().as("onSelect");

    cy.mount(<AvatarPicker onSelect={onSelect} />);

    // Verifica que el input de búsqueda esté presente
    cy.get("input[placeholder='Search animals…']").should("exist");

    // Verifica que se rendericen muchos animales (mínimo uno visible)
    cy.get("img[alt]").should("have.length.greaterThan", 0);

    // Escribe 'fox' y verifica que solo aparezca ese animal
    cy.get("input").type("fox");
    cy.get("img[alt]").should("have.length", 1).and("have.attr", "alt", "fox");

    // Clic en el avatar
    cy.get("button").click();

    // Verifica que se llamó a onSelect con el URL correcto
    cy.get("@onSelect").should(
      "have.been.calledWith",
      "https://anonymous-animals.azurewebsites.net/animal/fox"
    );
  });
});
