import React from "react";
import ActionMenu from "../../src/components/BacklogTable/ActionMenu";

describe("ActionMenu", () => {
  it("opens menu and triggers all actions", () => {
    const onEdit = cy.stub().as("onEdit");
    const onDelete = cy.stub().as("onDelete");
    const onViewDetails = cy.stub().as("onViewDetails");
    const onGenerateStories = cy.stub().as("onGenerateStories");

    const Wrapper = () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <ActionMenu
          onEdit={onEdit}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
          onGenerateStories={onGenerateStories}
          isEpic={true}
        />
      </div>
    );

    cy.mount(<Wrapper />);

    cy.get('button[aria-label="Actions"]').click();

    cy.contains("View Details").should("exist").click({ force: true });
    cy.get("@onViewDetails").should("have.been.calledOnce");

    cy.get('button[aria-label="Actions"]').click();
    cy.contains("Generate Stories").click({ force: true });
    cy.get("@onGenerateStories").should("have.been.calledOnce");

    cy.get('button[aria-label="Actions"]').click();
    cy.contains("Edit").click({ force: true });
    cy.get("@onEdit").should("have.been.calledOnce");

    cy.get('button[aria-label="Actions"]').click();
    cy.contains("Delete").click({ force: true });
    cy.get("@onDelete").should("have.been.calledOnce");
  });
});
