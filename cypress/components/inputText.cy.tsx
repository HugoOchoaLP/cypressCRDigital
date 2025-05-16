/// <reference types="cypress" />
import * as React from 'react';
import { TextInput } from '../../src/components/TextInput/TextInput';

describe("TextInput Component", () => {
  const ControlledInput = ({
    inputName,
    inputType,
    labelText,
    isRequired,
  }: {
    inputName: string;
    inputType: string;
    labelText?: string;
    isRequired: boolean;
  }) => {
    const [value, setValue] = React.useState("");

    return (
      <TextInput
        inputName={inputName}
        inputType={inputType}
        labelText={labelText}
        inputValue={value}
        isRequired={isRequired}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  };

  it("should allow typing an email", () => {
    cy.mount(
      <ControlledInput
        inputName="email"
        inputType="email"
        isRequired={true}
      />
    );

    cy.get('input')
      .should('have.attr', 'type', 'email')
      .type('user@example.com')
      .should('have.value', 'user@example.com');
  });

  it("should allow typing a password", () => {
    cy.mount(
      <ControlledInput
        inputName="password"
        inputType="password"
        isRequired={true}
      />
    );

    cy.get('input')
      .should('have.attr', 'type', 'password')
      .type('MySecurePass123!')
      .should('have.value', 'MySecurePass123!');
  });
});
