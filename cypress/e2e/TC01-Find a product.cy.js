/// <reference types="Cypress" />

describe('Search products and select one', () => {
    it('Search a product and select one', () => {
      
        cy.navigate();

        //cy.closeModal();
        
        // Find the searchbar and type a product
        cy.get('.site-search__controls__input')
            .type('guitars')
            .should('have.value', 'guitars')
            .type("{enter}")
            .then(() => {
                //cy.wait(2000);
                cy.closeModal();
                
                //assert
                cy.get('ul.rc-listing-grid li')
                    .should("exist")
                    .should('be.visible')
                    .first()
                    .click();
            });
    });
});
