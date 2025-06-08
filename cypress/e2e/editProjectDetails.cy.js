describe('Edit Project Details', () => {
  beforeEach(() => {
    // Login first
    cy.visit('/login');
    cy.get("#email").type("cypress@email.com");
    cy.get("#password").type('1234');
    cy.get('form').submit();
    
    // Wait for login to complete and redirect
    cy.url().should('include', '/create');
    
    // Visit the Cypress Test Project
    cy.contains('Cypress Test Project').click();
  });

  it('should edit project name and description', () => {
    // Click the Settings button
    cy.contains('Settings').click();
    
    // Click the Edit button
    cy.contains('Edit').click();
    
    // Edit project name
    cy.get('input[name="name"]')
      .clear()
      .type('Updated Project Name');
    
    // Edit project description
    cy.get('textarea[name="description"]')
      .clear()
      .type('Updated project description');
    
    // Click Save button
    cy.contains('Save').click();
    
  });
}); 