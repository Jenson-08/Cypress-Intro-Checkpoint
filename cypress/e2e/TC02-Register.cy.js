
describe('Register', () => {
  it('Register', () => {
    cy.fixture('credentials.json').then(registerData => {
      const { name, email, validateRegister, nameRegister } = registerData;

      cy.navigate();
      
      cy.get('a.reverb-header__nav__link[href="/signup"]')
        .click();

      cy.get('.form-group__fields input[id="user[first_name]"]')
        .type('test')
        .should('have.value', nameRegister);

      cy.get('.form-group__fields input[id="user[last_name]"]')
        .type('test')
        .should('have.value', nameRegister);

      cy.randEmail().then((randEmailValue) => {
        cy.get('.form-group__fields input[id="user[email]"]')
          .type(randEmailValue)
          .should('have.value', randEmailValue);
        
        cy.get('.form-group__fields input[id="emailConfirmValue"]')
          .type(randEmailValue);

        cy.randPassword().then((randPasswordValue) => {
          cy.get('.rc-form-group__fields input[id="signup--password"]')
            .type(randPasswordValue)
            .should('have.value', randPasswordValue);

            
            cy.get('input[type="submit"].button.button--primary.width-100')
              .click();
            
          });
        });
      });
    });
  });

