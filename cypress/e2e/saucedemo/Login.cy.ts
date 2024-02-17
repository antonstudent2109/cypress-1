/// <reference types="cypress" />

import { PASSWORD, STANDART_USER } from "../../Constants"

describe('Login to saucedemo', () => {
  beforeEach(() => {
      cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
  })
  it('Positive login to saucedemo', () => {
      cy.get('[data-test="username"]').type(STANDART_USER)
      cy.get('[data-test="password"]').type(PASSWORD)
      cy.get('#login-button').click()
      cy.get('.shopping_cart_link').should('be.visible')
  })

  it.skip('Negative login test', () => {
      
      cy.get('[data-test="username"]').type('abc')
      cy.get('[data-test="password"]').type('abc')
      cy.get('#login-button').click()
      cy.get('.error-button').should('be.visible')
  })
})