/// <reference types="cypress" />

import { STANDART_USER, PASSWORD, URL } from "../../Constants";


describe('checkout test', () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.get('[data-test="username"]').type(STANDART_USER)
    cy.get('[data-test="password"]').type(PASSWORD)
    cy.get('#login-button').click()

  })
  it('Checkout test', () => {
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('#checkout').click();
    cy.get('[data-test="firstName"]').type('Anton'); //https://docs.cypress.io/api/cypress-api/custom-commands
    cy.get('[data-test="lastName"]').type('Yu');
    cy.get('[data-test="postalCode"]').type('220');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.contains('.Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  })
  describe('verifying that values are correct', ()=>{
    cy.get('inventory_item_price').should('summary_info_label summary_total_label' , 'Tax: $' );
    cy.get('finish').click();
  })
})