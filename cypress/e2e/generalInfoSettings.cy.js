describe('Configuración de General Info en Project Settings', () => {
  const nuevoNombre = `Proyecto Editado ${Date.now()}`;
  const nuevaDescripcion = `Descripción editada ${Date.now()}`;

  before(() => {
    cy.visit('/');
    cy.get('#email').type('a01641402@tec.mx');
    cy.get('#password').type('123456');
    cy.get('.inline-flex').click();
    cy.contains('EcoTrace').click();
  });

  it('Debe editar la información general y mostrar un toast de éxito', () => {
    // Ir a Settings
    cy.contains('Settings').click();
    // Ir a la pestaña General Info
    cy.contains('General Info').click();
    // Presionar botón Edit
    cy.contains('button', 'Edit').click();
    // Editar nombre y descripción
    cy.get('textarea').first().clear().type(nuevoNombre);
    cy.get('textarea').last().clear().type(nuevaDescripcion);
    // Cambiar status (dropdown)
    cy.get('select').eq(0).select('Completed');
    // Cambiar visibility (dropdown)
    cy.get('select').eq(1).select('Public');
    // Guardar cambios
    cy.contains('button', 'Save').click();
    // Verificar el toast de éxito
    cy.contains('Project updated successfully!', { timeout: 10000 }).should('be.visible');
  });
}); 