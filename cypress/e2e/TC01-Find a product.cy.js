/// <reference types="Cypress" />

describe('Search products and select one', () => {
    it('Search a product and add to cart', () => {
      
        cy.visit('https://reverb.com/');

        cy.get('.rc-button.rc-button--filled.rc-button--main.rc-button--medium')
            .should('be.visible')
            .click();
        
            // Find the searchbar and type a product
        cy.get('.site-search__controls__input')
            .type('guitars')
            .should('have.value', 'guitars')
            .type("{enter}");
        
            //click on the product
        cy.get('button.rc-button.rc-button--filled.rc-button--main.rc-button--medium')
            .click();
       
            //assert
        cy.get('ul.rc-listing-grid li')
            .should("exist")
            .should('be.visible')
            .first()
            .click();
                

    });
  });
  