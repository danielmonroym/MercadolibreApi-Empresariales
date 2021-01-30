describe('My First Cypress Test MercadoLibreAngular', () => {
    // it('first assert', () => {
    //// })
 
    // it('first cypress test on a webpage', () => {
     ////      cy.url().should('include', '/commands/actions');
    //      cy.get('.action-email').type('daniel.monroym@udea.edu.co')
   //  })
 
     it('Search a product in LocalHost', () => {
         cy.visit("http://localhost:4200/");
         cy.get('input').type('ipad {enter}');
        cy.contains('Ver más').click();
     })
 })