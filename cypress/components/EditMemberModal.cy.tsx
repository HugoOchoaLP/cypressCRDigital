import React from 'react';
import EditMemberModal from '../../src/components/EditMemberModal/EditMemberModal';

const member = {
  userId: 1,
  projectRoleId: 'admin',
  joinedAt: { _seconds: 0, _nanoseconds: 0 },
  name: 'Test User',
  profilePicture: '',
  email: 'test@example.com',
  lastLogin: '',
};

const availableRoles = ['admin', 'member', 'viewer'];

describe('EditMemberModal', () => {
  it('renders when open', () => {
    cy.mount(
      <EditMemberModal
        isOpen={true}
        onClose={cy.stub()}
        member={member}
        availableRoles={availableRoles}
        onSubmit={cy.stub()}
      />
    );
    cy.contains('Edit Member').should('exist');
    cy.get('input[type="text"]').should('have.value', 'Test User');
    cy.get('input[type="email"]').should('have.value', 'test@example.com');
  });

  it('calls onClose when cancel button is clicked', () => {
    const onClose = cy.stub();
    cy.mount(
      <EditMemberModal
        isOpen={true}
        onClose={onClose}
        member={member}
        availableRoles={availableRoles}
        onSubmit={cy.stub()}
      />
    );
    cy.get('button').contains(/cancel/i).click();
    cy.wrap(onClose).should('have.been.called');
  });

  it('calls onSubmit when update button is clicked', () => {
    const onSubmit = cy.stub();
    cy.mount(
      <EditMemberModal
        isOpen={true}
        onClose={cy.stub()}
        member={member}
        availableRoles={availableRoles}
        onSubmit={onSubmit}
      />
    );
    cy.get('button').contains(/update/i).click();
    cy.wrap(onSubmit).should('have.been.called');
  });
}); 