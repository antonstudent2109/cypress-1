/// <reference types="cypress" />

import { STANDART_USER, PASSWORD } from "../../Constants";


describe('checkout test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(STANDART_USER)
    cy.get('[data-test="password"]').type(PASSWORD)
    cy.get('#login-button').click()

  })
  it('Checkout test', () => {
    // cy.type('Cypress.io{enter}');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-onesie').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('#checkout').click();
    cy.get('[data-test="firstName"]').type('Anton'); //https://docs.cypress.io/api/cypress-api/custom-commands
    cy.get('[data-test="lastName"]').type('Yu');
    cy.get('[data-test="postalCode"]').type('220');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.contains('Thank you for your order!');
  })

})