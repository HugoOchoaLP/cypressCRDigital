describe('Meeting Access', () => {
  it('should allow access to meetings page for Product Owner', () => {
    // Login as Product Owner
    cy.visit('/login');
    cy.get("#email").type("a01722533@tec.mx");
    cy.get("#password").type('12345');
    cy.get('form').submit();

    // Navigate to project
    cy.contains('Cypress Test Project').click();

    // Navigate to meetings page
    cy.contains('Meetings').click();

    // Verify meetings page is accessible
    cy.contains('Meetings').should('be.visible');
    
    // Click Schedule Meeting button
    cy.get('.bg-\\[var\\(--accent-pink\\)\\]').first().click();

    // Wait for overlay to disappear
    cy.wait(1000);

    // Fill meeting form
    cy.get('input[placeholder="Enter meeting title"]').type('Test Meeting');
    
    // Set meeting date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    cy.get('input[type="date"]').type(tomorrow.toISOString().split('T')[0]);

    // Schedule the meeting
    cy.get('._footer_2b586_446 > .bg-\\[var\\(--accent-pink\\)\\]').click();

    // Wait 2 seconds after creating meeting
    cy.wait(2000);
  });

  it('should allow editing a meeting', () => {
    // Login as Product Owner
    cy.visit('/login');
    cy.get("#email").type("a01722533@tec.mx");
    cy.get("#password").type('12345');
    cy.get('form').submit();

    // Navigate to project
    cy.contains('Cypress Test Project').click();

    // Navigate to meetings page
    cy.contains('Meetings').click();

    // Click the actions button for the first meeting
    cy.get(':nth-child(1) > ._cardHeader_24h88_29 > ._actionsContainer_24h88_85 > ._actionsButton_24h88_89').click();

    // Click Edit option
    cy.contains('Edit').click();

    // Update meeting title
    cy.get('input[placeholder="Enter meeting title"]').clear().type('Updated Test Meeting');
    
    // Update meeting date to day after tomorrow
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    cy.get('input[type="date"]').clear().type(dayAfterTomorrow.toISOString().split('T')[0]);

    // Save the changes
    cy.get('._footer_2b586_446 > .bg-\\[var\\(--accent-pink\\)\\]').click();

    // Wait 2 seconds after updating meeting
    cy.wait(2000);
  });

  it('should allow deleting a meeting', () => {
    // Login as Product Owner
    cy.visit('/login');
    cy.get("#email").type("a01722533@tec.mx");
    cy.get("#password").type('12345');
    cy.get('form').submit();

    // Navigate to project
    cy.contains('Cypress Test Project').click();

    // Navigate to meetings page
    cy.contains('Meetings').click();

    // Click the actions button for the first meeting
    cy.get(':nth-child(1) > ._cardHeader_24h88_29 > ._actionsContainer_24h88_85 > ._actionsButton_24h88_89').click();

    // Click Cancel Meeting option
    cy.contains('Cancel Meeting').click();

    // Confirm deletion
    cy.get('._formActions_1bpcs_91 > .bg-\\[var\\(--error\\)\\]').click();

    // Wait 2 seconds after deleting meeting
    cy.wait(2000);

    // Verify meeting was deleted
    cy.contains('Test Meeting').should('not.exist');
  });
}); 