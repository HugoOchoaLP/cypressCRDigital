/// <reference types="cypress" />
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewProjectModal from '../../src/components/NewProjectModal/NewProjectModal';

describe('NewProjectModal', () => {
  beforeEach(() => {
    cy.intercept('GET', '/users', {
      statusCode: 200,
      body: [
        {
          id: 2,
          userId: 2,
          firstName: 'Bob',
          lastName: 'Jones',
          email: 'bob@example.com',
        },
      ],
    });
  });

  it('renders and allows filling the form', () => {
    const onClose = cy.stub();
    const queryClient = new QueryClient();
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <NewProjectModal isOpen={true} onClose={onClose} currentUserId={1} />
      </QueryClientProvider>
    );
    cy.contains('New Project').should('exist');
    cy.get('input#projectName').type('My Test Project');
    cy.get('textarea#description').type('This is a test project.');
    cy.get('input#projectName').should('have.value', 'My Test Project');
    cy.get('textarea#description').should('have.value', 'This is a test project.');
    cy.contains('button', 'Create Project').click();
  });
}); 