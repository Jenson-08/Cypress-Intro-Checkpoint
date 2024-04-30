Cypress.Commands.add('navigate', () => {

    cy.visit('https://reverb.com/')
    cy.contains('Accept').click()

})


Cypress.Commands.add('closeModal', () => {
 // Close the alert if it's visible
 cy.get('.reverb-modal__content').then($alert => {
    if ($alert.is(':visible')) {
        cy.get('.reverb-modal__content .rc-button--filled').click()
    }
    })
})


Cypress.Commands.add('randEmail', () => {

    // generate random chars
    const charRandom = Math.random().toString(36).substring(2, 7);
    // generate random numbers
    const randNum = Math.floor(Math.random() * 1000);

    const email = `test${charRandom}${randNum}@gmail.com`;
    return email;
});

Cypress.Commands.add('randPassword', () => {

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
});
  