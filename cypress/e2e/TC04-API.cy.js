/// <reference types="Cypress" />

describe('Prueba de API de Artículos', () => {
  it('API Test', () => {
    // API Request
    cy.request({
      method: 'GET',
      url: 'https://api.reverb.com/api/articles/recently_featured',
      headers: {
        'Accept-Version': '3.0' // API reverb
      }
      }).then((response) => {
        // Status code
        expect(response.status).to.eq(200);

        // Structure of response
        expect(response.body).to.have.property('articles').that.is.an('array');
        expect(response.body.articles).to.have.lengthOf.at.least(1);

        // Verifiy the responses 
        response.body.articles.forEach((article) => {
          expect(article).to.have.property('title').that.is.a('string').and.is.not.empty;
          expect(article).to.have.property('summary').that.is.a('string').and.is.not.empty;
          expect(article).to.have.property('author_name').that.is.a('string').and.is.equal('Reverb');

          // Assertions
          expect(article).to.have.property('author_email').that.is.a('string').and.is.empty;

          // Assertions of categories
          expect(article).to.have.property('categories').that.is.an('array').and.is.not.empty;
          article.categories.forEach((category) => {
            expect(category).to.have.property('id').that.is.a('number').and.is.equal(3);
            expect(category).to.have.property('name').that.is.a('string').and.is.not.empty;
            expect(category).to.have.property('created_at').that.is.a('string').and.is.equal('2014-11-24T10:59:05-06:00');
            expect(category).to.have.property('updated_at').that.is.a('string').and.is.equal('2016-12-14T16:21:42-06:00');
            expect(category).to.have.property('slug').that.is.a('string').and.is.equal('news-and-reviews');
          });
        });
      });
    });
  });
          
