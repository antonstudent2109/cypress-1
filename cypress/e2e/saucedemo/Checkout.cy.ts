 describe('checkout test', ()=>{
    it('Checkout test', () => {
      cy.get('add-to-cart-sauce-labs-bike-light').click();
      cy.get('shopping_cart_badge').click();
      cy.get('checkout').click();
      cy.get('input[firstName=first-name]').type('Anton'); //https://docs.cypress.io/api/cypress-api/custom-commands
      cy.get('input[lastName=last-name]').type('Yu');
      cy.get('input[zipCode=postal-code]').type('220'); 
    })
    
  })