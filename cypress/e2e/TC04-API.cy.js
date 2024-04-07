/// <reference types="Cypress" />

describe('API test', () => {
    it('Specific information from a user', () => {
      // request to api
      cy.request('GET', 'https://rickandmortyapi.com/api/character/119')
        .then((response) => {
          // assertions
          expect(response.status).to.eq(200);
          
          // expected results
          expect(response.body).to.have.property('id', 119);
          expect(response.body).to.have.property('name', 'Evil Rick');
          expect(response.body).to.have.property('status', 'Dead');
          expect(response.body).to.have.property('gender', "Male");
        });
    });
  });
  
