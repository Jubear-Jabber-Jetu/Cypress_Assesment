describe(')Add to Cart and Update', () => {
it('Click Check Payment Status', () => {
  cy.get('[data-test="product-01JM1GP4KPMAV49JVZ095F53XR"] > .card-body > [data-test="product-name"]').click(); 
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="cart-quantity"]').click();
  cy.get('[data-test="product-title"]')
            .contains('Combination Pliers')
            .should('be.visible');
  cy.get('[data-test="product-quantity"]').clear().type('3').type('{enter}');  
  cy.wait(8000);
  cy.get('[data-test="line-price"]')
            .should('contain.text', '$42.45');       
    });
});
  
  