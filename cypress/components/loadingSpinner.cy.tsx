/// <reference types="cypress" />
import * as React from 'react';
import { LoadingSpinner } from '../../src/components/Loading/LoadingSpinner';

describe("LoadingSpinner Component", () => {
  it("should render with custom text and subtext", () => {
    cy.mount(
      <LoadingSpinner text="Cargando..." subtext="Por favor espera" />
    );

    cy.get('[data-testid="loading-spinner"]').should('exist');
    cy.contains('Cargando...').should('exist');
    cy.contains('Por favor espera').should('exist');
  });

  it("should render in full screen mode", () => {
    cy.mount(
      <LoadingSpinner fullScreen={true} size="large" />
    );

    cy.get('[data-testid="loading-spinner-fullscreen"]').should('exist');
  });
});
