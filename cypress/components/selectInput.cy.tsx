import React, { useState } from "react";
import { SelectInput } from "../../src/components/SelectInput/SelectInput";

describe("SelectInput component", () => {
  it("renders correctly and handles selection", () => {
    const SelectInputWrapper = () => {
      const [value, setValue] = useState("");

      return (
        <SelectInput
          inputName="priority"
          inputValue={value}
          onChange={(e) => setValue(e.target.value)}
          isRequired={true}
          placeholder="Select a priority"
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />
      );
    };

    cy.mount(<SelectInputWrapper />);

    // Verifica que el placeholder esté visible
    cy.get("select").find(":selected").should("have.text", "Select a priority");

    // Cambia el valor a "High"
    cy.get("select").select("High");
    cy.get("select").should("have.value", "high");
  });
});
