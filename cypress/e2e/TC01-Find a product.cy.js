/// <reference types="Cypress" />

describe('Search products and select one', () => {
    it('Search a product and select one', () => {
        cy.navigate();

        cy.get('.site-search__controls__input')
            .type('guitars')
            .should('have.value', 'guitars')
            .type("{enter}")
           
            .then(() => {
                // Una vez que se completa la búsqueda, cerramos el modal
                cy.closeModal();
                
                // Después de cerrar el modal, buscamos el primer elemento de la lista y hacemos scroll hacia él
                cy.get('ul.rc-listing-grid li').first()
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            });
           
    });
});