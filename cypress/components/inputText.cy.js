import { TextInput } from '../../src/components/TextInput/TextInput';

describe("TextInput", () => {
  it("Mounts with a label and default text type", () => {
    cy.mount(
      <TextInput
        inputName="username"
        inputValue=""
        isRequired={true}
        onChange={() => {}}
      />
    );

    cy.get('label').should('have.text', 'username');
    cy.get('input')
      .should('have.attr', 'type', 'text')
      .and('have.attr', 'name', 'username')
      .and('have.attr', 'required');
  });

  it("Mounts with a custom label and email type", () => {
    cy.mount(
      <TextInput
        inputName="userEmail"
        labelText="Correo"
        inputType="email"
        inputValue=""
        isRequired={false}
        onChange={() => {}}
      />
    );

    cy.get('label').should('have.text', 'Correo');
    cy.get('input')
      .should('have.attr', 'type', 'email')
      .and('have.attr', 'name', 'userEmail')
      .and('not.have.attr', 'required');
  });

  it("Renders initial value", () => {
    cy.mount(
      <TextInput
        inputName="password"
        inputType="password"
        inputValue="secret"
        isRequired={true}
        onChange={() => {}}
      />
    );

    cy.get('input')
      .should('have.attr', 'type', 'password')
      .and('have.value', 'secret');
  });

  it("Calls onChange when typing", () => {
    const handleChange = cy.stub().as('handleChange');
    
    cy.mount(
      <TextInput
        inputName="nickname"
        inputValue=""
        isRequired={false}
        onChange={handleChange}
      />
    );

    cy.get('input').type('Yali');
    cy.get('@handleChange').should('have.been.called');
  });
});
