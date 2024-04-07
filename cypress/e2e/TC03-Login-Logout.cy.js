/// <reference types="Cypress" />

describe('Login and logout', () => {
    it('Login and logout', () => {
      // Visitar la página web
        cy.visit('https://reverb.com/');

        cy.get('.rc-button.rc-button--filled.rc-button--main.rc-button--medium')
            .first()
            .should('be.visible')
            .click();

        cy.get('a.reverb-header__nav__link[href="/signin"]')
            //.first()
            .click();

            //complete inputs
        cy.get('input.rc-text-input__input#signin--login')
           .type('jensontest@gmail.com')
           .should('have.value', 'jensontest@gmail.com')

        cy.get('input[type="password"][autocomplete="current-password"]#signin--password')
           .type('12345678')
           
        cy.get('input[type="submit"].button.button--primary.width-100')
           .click();

        cy.get('.alert-banner__info')
           .should('exist')
           .and('contain', 'Jenson');

        cy.get('button.header-dropdown__trigger#header-dropdown-user_menu')
           .click();

           //click on signout
        cy.get('a[href="/signout"][data-method="delete"]').eq(1)
           .click();

           //assert
        cy.get('.rc-button.rc-button--filled.rc-button--main.rc-button--medium')
        .should('exist')
        
      
    });
  });
  