import React, { useState } from "react";
import SearchFilter from "../../src/components/BacklogTable/SearchFilter";

describe("SearchFilter", () => {
  it("renders with placeholder, handles input, and clears correctly", () => {
    const SearchFilterWrapper = () => {
      const [search, setSearch] = useState("");
      return <SearchFilter value={search} onChange={setSearch} />;
    };

    cy.mount(<SearchFilterWrapper />);

    // Verifica que el input tenga el placeholder correcto
    cy.get("input[placeholder='Search by title...']").should("exist");

    // Escribe en el input y verifica que el valor cambie
    cy.get("input").type("feature");
    cy.get("input").should("have.value", "feature");

    // Verifica que el botón de limpiar (X) aparece y lo clickeamos
    cy.get("button[aria-label='Clear search']").should("exist").click();

    // Verifica que el input se haya limpiado
    cy.get("input").should("have.value", "");
  });
});
