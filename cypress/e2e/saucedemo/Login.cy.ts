describe('template spec', () => {
  it('Login', () => {
    cy.visit('https://example.cypress.io');
    cy.get('input[user-name=standard_user]').type('user.email'); //https://docs.cypress.io/api/cypress-api/custom-commands
    cy.get('input[name=password]').type('secret_sauce');
    cy.get('login-button').click();
    cy.get('class').contains(`app_logo`);
    cy.get('continue').click();
    })
  it('Checkout test', () => {
    cy.get('add-to-cart-sauce-labs-bike-light').click();
    cy.get('shopping_cart_badge').click();
    cy.get('checkout').click();
    cy.get('input[firstName=first-name]').type('Anton'); //https://docs.cypress.io/api/cypress-api/custom-commands
    cy.get('input[lastName=last-name]').type('Yu');
    cy.get('input[zipCode=postal-code]').type('220'); 
  })
})

describe('verifying that values are correct', ()=>{
  cy.get('inventory_item_price').should('summary_info_label summary_total_label' , 'Tax: $' );
  cy.get('finish').click();
})