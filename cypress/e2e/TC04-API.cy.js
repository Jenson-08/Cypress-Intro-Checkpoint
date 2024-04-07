/// <reference types="Cypress" />

describe('API test', () => {
    it('Specific information from a user', () => {
      // Realiza una llamada a la API
      cy.request('GET', 'https://rickandmortyapi.com/api/character/119')
        .then((response) => {
          // Verifica que la llamada se haya realizado correctamente
          expect(response.status).to.eq(200);
          
          // Verifica que la respuesta contenga la información esperada
          expect(response.body).to.have.property('id', 119);
          expect(response.body).to.have.property('name', 'Evil Rick');
          expect(response.body).to.have.property('status', 'Dead');
          expect(response.body).to.have.property('gender', "Male");
        });
    });
  });
  