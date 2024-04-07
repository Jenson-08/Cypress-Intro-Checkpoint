/// <reference types="Cypress" />

function randEmail() {
    // generate random chars
    const charRandom = Math.random().toString(36).substring(2, 7);
    // generate random numbers
    const randNum = Math.floor(Math.random() * 1000);

    const email = `test${charRandom}${randNum}@gmail.com`;
    return email;
  }
  function randPassword() {
    // Define a possible chars
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charsLength = chars.length;

  // rand between 8 and 12 characters
  const length = Math.floor(Math.random() * 5) + 8;

  let password = '';
  for (let i = 0; i < length; i++) {
    // choose a char from the list
    const charIndex = Math.floor(Math.random() * charsLength);
    password += chars.charAt(charIndex);
  }
  return password;
}
  


describe('Register', () => {
    it('Register', () => {
      // Visitar la página web
        cy.visit('https://reverb.com/');

        cy.get('.rc-button.rc-button--filled.rc-button--main.rc-button--medium')
            .first()
            .should('be.visible')
            .click();

        cy.get('a.reverb-header__nav__link[href="/signup"]')
            //.first()
            .click();

         // Find the inputs and type 
         cy.get('.form-group__fields input[id="user[first_name]"]')
         .type('test')
         .should('have.value', 'test')
         
         cy.get('.form-group__fields input[id="user[last_name]"]')
         .type('test')
         .should('have.value', 'test')


         const rand = randEmail();
         cy.get('.form-group__fields input[id="user[email]"]')
         .type(rand)
         
        const confirmRand = rand;
        cy.get('.form-group__fields input[id="emailConfirmValue"]')
         .type(confirmRand)

         const randpassw = randPassword();
         cy.get('.rc-form-group__fields input[id="signup--password"]')
          .type(randpassw)

          //accept terms and conditions
        cy.get('input[type="checkbox"][name="user[accept_terms]"]')
        .click()
        .should('be.checked')

        cy.get('input[type="submit"].button.button--primary.width-100')
        .click();
        
        //assert
        cy.get('.alert-banner__info')
        .should('exist')
        .and('contain', 'test, please complete the following:');

        

        });
});
    