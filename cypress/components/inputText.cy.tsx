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
  });
});
