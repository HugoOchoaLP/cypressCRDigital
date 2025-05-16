import React, { useState } from 'react';
import { Alert } from '../../src/components/Alert/Alert';

describe('Alert', () => {
  it('closes when clicking Close button', () => {
    const AlertWrapper = () => {
      const [visible, setVisible] = useState(true);
      return visible ? (
        <Alert
          type="success"
          message="This will be dismissed."
          onClose={() => setVisible(false)}
        />
      ) : (
        <p data-cy="closed-msg">Alert was closed</p>
      );
    };

    cy.mount(<AlertWrapper />);
    cy.contains("Close").click();
    cy.get('[data-cy="closed-msg"]').should("exist");
  });
});
