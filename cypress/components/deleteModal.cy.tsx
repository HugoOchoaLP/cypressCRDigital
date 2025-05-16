import React from 'react';
import DeleteConfirmationModal from '@/components/ui/deleteConfirmationModal.tsx';
import { AlertTriangle, X } from 'lucide-react'; // Import icons for assertions

describe('<DeleteConfirmationModal />', () => {
    it('should render the modal when isOpen is true', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get('.modalOverlay').should('be.visible');
        cy.get('.modalContent').should('be.visible');
        cy.get('h2').should('contain', 'Confirm Deletion');
        cy.get('p').should('contain', 'Are you sure you want to delete this item?');
        cy.contains('Cancel').should('be.visible');
        cy.contains('Delete').should('be.visible');
        cy.get('[aria-label="Close"]').should('be.visible'); // Check for the close button
        cy.get(AlertTriangle).should('be.visible'); // Check for the alert icon
    });

    it('should not render the modal when isOpen is false', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={false}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get('.modalOverlay').should('not.exist');
        cy.get('.modalContent').should('not.exist');
    });

    it('should call onClose when the overlay is clicked', () => {
        const onCloseSpy = cy.spy().as('onClose');
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={onCloseSpy}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get('.modalOverlay').click();
        cy.get('@onClose').should('have.been.calledOnce');
    });

    it('should call onClose when the close button is clicked', () => {
        const onCloseSpy = cy.spy().as('onClose');
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={onCloseSpy}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get('[aria-label="Close"]').click();
        cy.get('@onClose').should('have.been.calledOnce');
    });

    it('should call onClose when the "Cancel" button is clicked', () => {
        const onCloseSpy = cy.spy().as('onClose');
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={onCloseSpy}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.contains('Cancel').click();
        cy.get('@onClose').should('have.been.calledOnce');
    });

    it('should call onConfirm and onClose when the "Delete" button is clicked', () => {
        const onConfirmSpy = cy.spy().as('onConfirm');
        const onCloseSpy = cy.spy().as('onClose');
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={onCloseSpy}
                onConfirm={onConfirmSpy}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.contains('Delete').click();
        cy.get('@onConfirm').should('have.been.calledOnce');
        cy.get('@onClose').should('have.been.calledOnce');
    });

    it('should display the correct title and message', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Remove Item"
                message="This action cannot be undone."
            />
        );
        cy.get('h2').should('contain', 'Remove Item');
        cy.get('p').should('contain', 'This action cannot be undone.');
    });

    it('should render the AlertTriangle icon', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get(AlertTriangle).should('exist');
    });

    it('should render the X icon in the close button', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get(`.${styles.closeButton} svg`).should('exist'); // Target the SVG inside the close button
    });

    it('should render the X icon in the cancel button', () => {
        cy.mount(
            <DeleteConfirmationModal
                isOpen={true}
                onClose={() => {}}
                onConfirm={() => {}}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        );
        cy.get(`.${styles.cancelButton} svg`).should('exist'); // Target the SVG inside the cancel button
    });
});