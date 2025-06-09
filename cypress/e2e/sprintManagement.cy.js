describe('Sprint Management', () => {
  beforeEach(() => {
    // Login first
    cy.visit('/login');
    cy.get("#email").type("a01722533@tec.mx");
    cy.get("#password").type('12345');
    cy.get('form').submit();
    cy.contains('Cypress Test Project').click();
    cy.contains('Sprints').click();
  });

  it('should allow viewing, creating, editing and deleting sprints', () => {
    // Verify sprint list is visible
    cy.contains('Sprints').should('be.visible');
    
    // Create a new sprint
    cy.contains('Create Sprint').click();
    
    // Fill in sprint details
    cy.get('input[placeholder="Enter sprint name"]').type('Test Sprint');
    cy.get('textarea[placeholder="Enter sprint goal"]').type('Test Sprint Goal');
    
    // Set start and end dates
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14); // 2 weeks duration
    
    cy.get('input[type="date"]').first().type(startDate.toISOString().split('T')[0]);
    cy.get('input[type="date"]').last().type(endDate.toISOString().split('T')[0]);
    
    // Click Create Sprint button
    cy.get('.sprint-form__actions > .bg-\\[var\\(--accent-pink\\)\\]').click();
    
    // Wait 1 second after creating sprint
    cy.wait(1000);
    
    // Verify sprint was created
    cy.contains('Test Sprint').should('be.visible');
    
    // Open the sprint
    cy.get('.sprint-header').first().click();
    
    // Click Edit option
    cy.contains('Edit').click();
    
    // Update sprint details
    cy.get('input[placeholder="Enter sprint name"]').clear().type('Updated Test Sprint');
    cy.get('textarea[placeholder="Enter sprint goal"]').clear().type('Updated Sprint Goal');
    
    // Update start and end dates
    const newStartDate = new Date();
    newStartDate.setDate(newStartDate.getDate() + 1); // Start tomorrow
    const newEndDate = new Date();
    newEndDate.setDate(newEndDate.getDate() + 15); // 2 weeks from tomorrow
    
    cy.get('input[type="date"]').first().clear().type(newStartDate.toISOString().split('T')[0]);
    cy.get('input[type="date"]').last().clear().type(newEndDate.toISOString().split('T')[0]);
    
    // Update the sprint
    cy.get('.sprint-form__actions > .bg-\\[var\\(--accent-pink\\)\\]').click();
    
    // Wait 1 second after updating sprint
    cy.wait(1000);
    
    // Verify sprint was updated
    cy.contains('Updated Test Sprint').should('be.visible');
    
    // Click Delete option
    cy.contains('Delete').click();
    
    // Confirm deletion with the error button
    cy.get('._formActions_1bpcs_91 > .bg-\\[var\\(--error\\)\\]').click();
    
    // Verify sprint was removed
    cy.contains('Updated Test Sprint').should('not.exist');
  });
}); 