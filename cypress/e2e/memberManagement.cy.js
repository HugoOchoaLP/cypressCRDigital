describe('Member Management Access Control', () => {
  beforeEach(() => {
    // Login first
    cy.visit('/login');
    cy.get("#email").type("a01722533@tec.mx");
    cy.get("#password").type('12345');
    cy.get('form').submit();
    cy.contains('Cypress Test Project').click();
    cy.contains('Team').click();
  });

  it('should allow Product Owner to perform all member management actions', () => {    
    // Add a new member
    cy.contains('Add User').click();
    
    // Select a member from the dropdown
    cy.get('._memberSelect_1panl_173').select('1'); // Select the first member
    
    // Select a role for the new member
    cy.get('select._roleSelect_1panl_174').select('developer');
    
    // Verify the role was selected
    cy.get('select._roleSelect_1panl_174').should('have.value', 'developer');
    
    // Click the add button to add the selected member with role
    cy.get('._addButton_1panl_198').click();
    
    // Click the final add button to confirm the addition
    cy.get('.justify-end > .bg-\\[var\\(--accent-pink\\)\\]').click();
    
    // Wait 1 second after adding user
    cy.wait(1000);
    
    // Verify new member was added with correct role
    cy.contains('Developer').should('be.visible');
    
    // Click the first actions button for edit
    cy.get('button.inline-flex.items-center.justify-center.p-3.rounded-md').first().click();
    
    // Click Edit option
    cy.contains('Edit').click();
    
    // Select Product Owner role
    cy.get('._select_7m8wc_65').select('Scrum Master');
    
    // Click Update button
    cy.contains('Update').click();
    
    // Wait 1 second after updating user
    cy.wait(1000);
    
    // Verify role was updated
    cy.contains('Scrum Master').should('be.visible');
    
    // Click the first actions button for delete
    cy.get('button.inline-flex.items-center.justify-center.p-3.rounded-md').first().click();
    
    // Click Delete option
    cy.contains('Delete').click();
    
    // Confirm deletion with the error button
    cy.get('.bg-\\[var\\(--error\\)\\]').click();
    
    // Verify member was removed
    cy.contains('Scrum Master').should('not.exist');
  });
}); 