// cypress/components/MembersList.cy.tsx
import React from 'react';
import MembersList from '@/components/MembersList/MembersList';
import MemberDetailed from '@/types/MemberDetailedType';
import { mount } from 'cypress/react';

const mockMembers: MemberDetailed[] = [
  {
    userId: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    projectRoleId: 'admin-role',
    lastLogin: new Date().toISOString(),
    profilePicture: '', // or provide base64 or URL if needed
  },
  {
    userId: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    projectRoleId: 'viewer-role',
    lastLogin: new Date(Date.now() - 86400000).toISOString(), // yesterday
    profilePicture: '',
  },
];

describe('MembersList component', () => {
  it('renders member info correctly and triggers edit/delete', () => {
    const onEdit = cy.stub().as('onEditStub');
    const onDelete = cy.stub().as('onDeleteStub');

    mount(
      <MembersList
        projectId="proj-123"
        members={mockMembers}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    // Check that both members are rendered
    cy.contains('Alice Johnson').should('exist');
    cy.contains('Bob Smith').should('exist');

    // Check roles formatted
    cy.contains('Admin Role').should('exist');
    cy.contains('Viewer Role').should('exist');

    // Trigger Edit for first member
    cy.get('button').first().click();
    cy.get('@onEditStub').should('have.been.calledWith', mockMembers[0]);

    // Trigger Delete for first member
    cy.get('button').eq(1).click();
    cy.get('@onDeleteStub').should('have.been.calledWith', mockMembers[0]);
  });
});
