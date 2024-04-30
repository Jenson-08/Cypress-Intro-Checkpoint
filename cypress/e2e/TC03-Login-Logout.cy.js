/// <reference types="Cypress" />

describe('Login and logout', () => {
    it('Login and logout', () => {

      cy.fixture('credentials.json').then(registerData => {
         const { name, email, validateRegister } = registerData;

        cy.navigate();

        //cy.closeModal();


        cy.get('a.reverb-header__nav__link[href="/signin"]')
            //.first()
            .click();

      
        cy.get('input.rc-text-input__input#signin--login')
           .type(email)
           .should('have.value', email)

        cy.get('input[type="password"][autocomplete="current-password"]#signin--password')
           .type('12345678')
           
        cy.get('input[type="submit"].button.button--primary.width-100')
           .click();

        cy.get('.alert-banner__info')
           .should('exist')
           .and('contain', name);

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
 });
